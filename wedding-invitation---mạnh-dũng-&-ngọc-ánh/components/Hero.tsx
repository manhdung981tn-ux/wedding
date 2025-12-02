
import React, { useEffect, useState } from 'react';
import { weddingData } from './wedding-data';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 10:00 AM - Dec 21, 2025
    const weddingDate = new Date(2025, 11, 21, 10, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { col1, col2, col3, col4, col5 } = weddingData.heroImages;

  return (
    <section className="relative h-screen overflow-hidden bg-rose-50 flex items-center justify-center">
      {/* Background Scrolling Wall */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 gap-2 px-1 rotate-0 md:-rotate-2 scale-110 opacity-50 pointer-events-none select-none">
         {/* Col 1 */}
         <div className="flex flex-col gap-2 animate-scroll-up">
            {[...col1, ...col1].map((src, i) => (
                <img key={`c1-${i}`} src={src} className="rounded w-full h-48 object-cover odd:h-64 even:h-56" alt="" />
            ))}
         </div>
         {/* Col 2 */}
         <div className="flex flex-col gap-2 animate-scroll-down mt-[-100px]">
            {[...col2, ...col2].map((src, i) => (
                <img key={`c2-${i}`} src={src} className="rounded w-full h-80 object-cover odd:h-56 even:h-64" alt="" />
            ))}
         </div>
         {/* Col 3 */}
         <div className="flex flex-col gap-2 animate-scroll-up">
            {[...col3, ...col3].map((src, i) => (
                <img key={`c3-${i}`} src={src} className="rounded w-full h-64 object-cover odd:h-48 even:h-80" alt="" />
            ))}
         </div>
         {/* Col 4 (PC) */}
         <div className="hidden md:flex flex-col gap-2 animate-scroll-down">
            {[...col4, ...col4].map((src, i) => (
                <img key={`c4-${i}`} src={src} className="rounded w-full h-72 object-cover odd:h-56" alt="" />
            ))}
         </div>
         {/* Col 5 (PC) */}
         <div className="hidden lg:flex flex-col gap-2 animate-scroll-up mt-[-150px]">
             {[...col5, ...col5].map((src, i) => (
                <img key={`c5-${i}`} src={src} className="rounded w-full h-64 object-cover odd:h-80" alt="" />
            ))}
         </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-soft-pink via-soft-pink/90 to-transparent"></div>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-2 animate-float">
            <i className="fas fa-heart text-rose-gold text-3xl drop-shadow-md"></i>
        </div>
        
        <div className="mb-6">
            <p className="font-serif italic text-lg md:text-xl text-gray-500 mb-2">Trân trọng kính mời quý khách</p>
            <p className="font-sans uppercase tracking-[0.2em] text-sm md:text-base text-deep-rose font-bold">Đến dự lễ thành hôn của</p>
        </div>
        
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-4 leading-none text-deep-rose drop-shadow-sm">
            Mạnh Dũng <br className="md:hidden" /> <span className="text-4xl md:text-6xl text-rose-300">&</span> <br className="md:hidden" /> Ngọc Ánh
        </h1>
        
        <p className="font-serif italic text-lg md:text-2xl mb-8 text-gray-600 font-light">
            <i className="fas fa-holly-berry text-xmas-red mr-2"></i> Vào lúc 10h00 - Ngày 21 tháng 12 <i className="fas fa-gifts text-xmas-green ml-2"></i>
        </p>

        <div className="inline-block border-y border-deep-rose/20 py-3 px-8 bg-white/60 backdrop-blur-md rounded-full shadow-sm mb-8">
            <p className="text-2xl md:text-3xl font-serif text-deep-rose font-bold tracking-widest">21 • 12 • 2025</p>
        </div>
        
        {/* Countdown Area */}
        <div className="flex flex-wrap justify-center items-end gap-3 md:gap-6 font-xmas text-deep-rose max-w-4xl mx-auto">
            
            {/* Box 1: Days */}
            <div className="relative group">
                <div className="bg-white/80 backdrop-blur border-2 border-rose-200 rounded-xl w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center shadow-lg relative z-10">
                    <span className="text-3xl md:text-5xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-sans mt-1">Ngày</span>
                </div>
                {/* Bé leo */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-4xl animate-climb-side z-20">
                    👶 <div className="absolute -top-3 left-1 text-xl">🎅</div>
                </div>
                {/* Tuyết trên nóc */}
                <div className="absolute -top-3 left-0 right-0 h-4 bg-white rounded-full opacity-80 z-20"></div>
            </div>

            {/* Box 2: Hours */}
            <div className="relative group mt-8 md:mt-0">
                {/* Bé bò */}
                <div className="absolute -top-10 left-0 w-full text-center text-4xl animate-crawl-top z-0">
                    👶 <div className="absolute -top-3 left-2 text-xl">🦌</div>
                </div>
                <div className="bg-white/80 backdrop-blur border-2 border-rose-200 rounded-xl w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center shadow-lg relative z-10">
                    <span className="text-3xl md:text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-sans mt-1">Giờ</span>
                </div>
            </div>

            {/* Box 3: Minutes */}
            <div className="relative group">
                <div className="bg-white/80 backdrop-blur border-2 border-rose-200 rounded-xl w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center shadow-lg relative z-10">
                    <span className="text-3xl md:text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-sans mt-1">Phút</span>
                </div>
                {/* Bé đu */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-4xl animate-swing-hang z-0 origin-top">
                    <div className="w-0.5 h-4 bg-rose-300 mx-auto"></div> 
                    👶 <div className="absolute top-0 right-0 text-xl">⛄</div>
                </div>
            </div>

            {/* Box 4: Seconds */}
            <div className="relative group mt-8 md:mt-0">
                {/* Bé ú òa */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl animate-peek-aboo z-0">
                    👶
                </div>
                <div className="bg-white/80 backdrop-blur border-2 border-rose-200 rounded-xl w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center shadow-lg relative z-10">
                    <span className="text-3xl md:text-5xl font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-sans mt-1">Giây</span>
                </div>
                <div className="absolute -top-2 -right-2 text-2xl z-20">🎀</div>
            </div>

        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-deep-rose/40">
        <i className="fas fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;
