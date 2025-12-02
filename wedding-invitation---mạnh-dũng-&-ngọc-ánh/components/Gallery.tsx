import React, { useState } from 'react';

interface Photo {
  src: string;
  icon: string;
  title: string;
  subtitle?: string;
  heightClass: string;
}

const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    icon: "fas fa-heart",
    title: "Together",
    subtitle: "Since 2020",
    heightClass: "h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    icon: "fas fa-camera",
    title: "Happy Day",
    heightClass: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=600&q=80",
    icon: "fas fa-kiss-wink-heart",
    title: "Love You",
    heightClass: "h-96",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    icon: "fas fa-snowflake",
    title: "Winter Love",
    heightClass: "h-72",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=600&q=80",
    icon: "fas fa-ring",
    title: "Forever",
    heightClass: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    icon: "fas fa-gift",
    title: "Our Gift",
    heightClass: "h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80",
    icon: "fas fa-dove",
    title: "Peace",
    heightClass: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1529636721198-d8977464d262?w=600&q=80",
    icon: "fas fa-star",
    title: "Dreamy",
    heightClass: "h-72",
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    // Upgrade quality for lightbox
    const highResUrl = src.replace('&w=600', '&w=1200').replace('&w=400', '&w=1200');
    setSelectedImage(highResUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-deep-rose mb-2">Album Kỷ Niệm</h2>
            <p className="font-sans text-gray-400 text-xs tracking-widest uppercase">Flip to see more</p>
        </div>
        
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo, index) => (
                <div key={index} className={`break-inside-avoid flip-card ${photo.heightClass} group`} onClick={() => openLightbox(photo.src)}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={photo.src} className="w-full h-full object-cover" alt={photo.title} />
                        </div>
                        <div className="flip-card-back">
                            <i className={`${photo.icon} text-3xl mb-2`}></i>
                            <p className="font-script text-2xl">{photo.title}</p>
                            {photo.subtitle && <p className="text-xs uppercase mt-1">{photo.subtitle}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
             <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out" onClick={closeLightbox}>
                 <img 
                    src={selectedImage} 
                    className="max-w-full max-h-[90vh] rounded shadow-2xl animate-[float_3s_ease-in-out_infinite] border-4 border-white" 
                    alt="Gallery Fullscreen"
                    onClick={(e) => e.stopPropagation()} // Prevent closing if clicking on image directly
                 />
                 <button className="absolute top-4 right-4 text-deep-rose text-4xl" onClick={closeLightbox}>
                     &times;
                 </button>
             </div>
        )}
    </section>
  );
};

export default Gallery;