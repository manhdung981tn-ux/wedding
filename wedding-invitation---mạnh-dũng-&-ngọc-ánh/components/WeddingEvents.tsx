
import React from 'react';
import { weddingData } from './wedding-data';

const WeddingEvents: React.FC = () => {
  const { groom, bride } = weddingData.weddingEvents;

  return (
    <section className="py-16 md:py-24 px-4 bg-white relative z-10">
        <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-deep-rose mb-2">Thông Tin Lễ Cưới</h2>
            <p className="font-sans text-gray-400 text-xs tracking-widest uppercase">Wedding Events</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Nhà Trai */}
            <div className="bg-soft-pink rounded-2xl overflow-hidden shadow-lg border border-rose-100 group hover:shadow-xl transition">
                <div className="p-8 text-center">
                    <div className="inline-block p-3 rounded-full bg-white mb-4 shadow-sm group-hover:scale-110 transition">
                        <i className="fas fa-glass-cheers text-2xl text-deep-rose"></i>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-gray-800 mb-2">{groom.title}</h3>
                    <p className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4">Nhà Trai</p>
                    <div className="space-y-2 mb-6 text-gray-600">
                        <p className="text-xl font-serif font-bold">{groom.time}</p>
                        <p className="font-sans text-sm">{groom.date}</p>
                        <p className="font-serif italic px-4">{groom.locationName}</p>
                        <p className="text-sm text-gray-500">{groom.address}</p>
                    </div>
                </div>
                <div className="map-container h-64 w-full bg-gray-200 relative">
                    <iframe 
                        src={groom.mapUrl}
                        loading="lazy" 
                        className="w-full h-full border-0"
                        title="Map Nhà Trai"
                    ></iframe>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 bg-white text-xs px-3 py-1 rounded shadow text-deep-rose hover:bg-deep-rose hover:text-white transition">
                        <i className="fas fa-map-marker-alt mr-1"></i> Mở rộng
                    </a>
                </div>
            </div>

            {/* Nhà Gái */}
            <div className="bg-soft-pink rounded-2xl overflow-hidden shadow-lg border border-rose-100 group hover:shadow-xl transition">
                <div className="p-8 text-center">
                    <div className="inline-block p-3 rounded-full bg-white mb-4 shadow-sm group-hover:scale-110 transition">
                        <i className="fas fa-heart text-2xl text-deep-rose"></i>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-gray-800 mb-2">{bride.title}</h3>
                    <p className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4">Nhà Gái</p>
                    <div className="space-y-2 mb-6 text-gray-600">
                        <p className="text-xl font-serif font-bold">{bride.time}</p>
                        <p className="font-sans text-sm">{bride.date}</p>
                        <p className="font-serif italic px-4">{bride.locationName}</p>
                        <p className="text-sm text-gray-500">{bride.address}</p>
                    </div>
                </div>
                <div className="map-container h-64 w-full bg-gray-200 relative">
                    <iframe 
                        src={bride.mapUrl}
                        loading="lazy" 
                        className="w-full h-full border-0"
                        title="Map Nhà Gái"
                    ></iframe>
                     <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 bg-white text-xs px-3 py-1 rounded shadow text-deep-rose hover:bg-deep-rose hover:text-white transition">
                        <i className="fas fa-map-marker-alt mr-1"></i> Mở rộng
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WeddingEvents;
