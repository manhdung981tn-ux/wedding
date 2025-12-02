
import React, { useState } from 'react';
import Hero from './components/Hero';
import WeddingEvents from './components/WeddingEvents';
import LoveStory from './components/LoveStory';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import FallingEffect from './components/FallingEffect';
import LuckyDraw from './components/LuckyDraw';

const App: React.FC = () => {
  // We can lift the music playing state here if we want the user interaction on the body to trigger it,
  // but keeping it self-contained in MusicPlayer or using a context is also fine.
  // For simplicity based on the request, we'll let MusicPlayer handle its own state
  // and add a global click handler to start it once if needed, or just let the button do it.

  return (
    <div className="bg-soft-pink text-gray-800 font-serif antialiased overflow-x-hidden relative selection:bg-rose-200">
      <MusicPlayer />
      <FallingEffect />
      
      <Hero />
      <WeddingEvents />
      <LoveStory />
      <Gallery />
      <LuckyDraw />
      <Wishes />
      <Footer />
    </div>
  );
};

export default App;
