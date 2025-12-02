import React, { useEffect, useState } from 'react';

interface FallingItem {
  id: number;
  content: string;
  left: string;
  duration: string;
  fontSize: string;
}

const FallingEffect: React.FC = () => {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const icons = [
        '<i class="fas fa-heart text-rose-400 text-opacity-40"></i>',
        '<i class="fas fa-snowflake text-blue-200 text-opacity-60"></i>',
        '<span class="text-rose-300 text-opacity-60">🌸</span>'
    ];

    const interval = setInterval(() => {
      const id = Date.now();
      const content = icons[Math.floor(Math.random() * icons.length)];
      const left = Math.random() * 100 + 'vw';
      const duration = Math.random() * 5 + 8 + 's';
      const fontSize = Math.random() * 15 + 10 + 'px';

      setItems(prev => [...prev, { id, content, left, duration, fontSize }]);

      // Cleanup old items (simpler than onAnimationEnd tracking for React state in this simple case)
      setTimeout(() => {
        setItems(prev => prev.filter(item => item.id !== id));
      }, 13000); // slightly longer than max duration
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {items.map(item => (
        <div
          key={item.id}
          className="falling-item"
          style={{
            left: item.left,
            animationDuration: item.duration,
            fontSize: item.fontSize,
          }}
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      ))}
    </>
  );
};

export default FallingEffect;