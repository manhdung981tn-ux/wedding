import React, { useEffect, useRef, useState } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Attempt auto-play on mount if possible, often blocked by browsers
    const playPromise = audioRef.current?.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Auto-play was prevented
          setIsPlaying(false);
        });
    }

    // Add global click listener to start music on first interaction
    const handleFirstInteraction = () => {
        if (!hasInteracted && audioRef.current && audioRef.current.paused) {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            setHasInteracted(true);
        }
    };

    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Play error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
        <button 
            onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the global interaction handler again if checking logic there
                toggleMusic();
            }} 
            className={`w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-deep-rose border border-rose-200 hover:scale-110 transition duration-300 ${isPlaying ? 'animate-spin-slow' : 'animate-pulse-slow'}`}
        >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-music'}`}></i>
        </button>
        <audio ref={audioRef} loop>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        </audio>
    </div>
  );
};

export default MusicPlayer;