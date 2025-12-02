
import React, { useState, useRef } from 'react';

interface Role {
  icon: string;
  name: string;
  desc: string;
}

const roles: Role[] = [
  { icon: '🍺', name: 'Trưởng Ban Tiếp Rượu', desc: 'Uống không say không về, ai mời cũng nhận!' },
  { icon: '🍗', name: 'Dũng Sĩ Diệt Mồi', desc: 'Tập trung chuyên môn: Ăn hết thực đơn.' },
  { icon: '📸', name: 'Thánh Sống Ảo', desc: 'Có mặt trong mọi khung hình, check-in mọi ngóc ngách.' },
  { icon: '🧊', name: 'Chuyên Gia Gắp Đá', desc: 'Nhiệt tình hết mình, người làm lạnh bầu không khí.' },
  { icon: '🎤', name: 'Ca Sĩ Giấu Mặt', desc: 'Cướp mic mọi lúc mọi nơi, hát hay không bằng hay hát.' },
  { icon: '🗣️', name: 'Tổ Trưởng Tổ Buôn', desc: 'Thông tấn xã vỉa hè, chuyện gì cũng biết.' },
  { icon: '🥂', name: 'Vận Động Viên Cụng Ly', desc: 'Cánh tay phải đắc lực của chú rể, 1, 2, 3... Zô!' },
  { icon: '🧐', name: 'Thám Tử Soi Make-up', desc: 'Soi từng đường kim mũi chỉ, phấn son cô dâu.' },
  { icon: '✉️', name: 'Người Vận Chuyển', desc: 'Ship phong bì, ship tình yêu, ship luôn cả người say.' },
  { icon: '😴', name: 'Đại Biểu Ngủ Gật', desc: 'Ăn no căng da bụng, chùng da mắt.' },
  { icon: '💃', name: 'Nữ Hoàng Sàn Nhảy', desc: 'Nhạc lên là quẩy, bất chấp hình tượng.' },
  { icon: '🤳', name: 'Streamer Đám Cưới', desc: 'Livestream toàn bộ sự kiện cho cộng đồng mạng.' },
];

const LuckyDraw: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<Role | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    let counter = 0;
    const maxSpins = 20 + Math.floor(Math.random() * 10); // Random duration
    
    // Play a ticking sound effect if desired, or just visual
    
    intervalRef.current = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * roles.length);
      setCurrentRole(roles[randomIndex]);
      counter++;

      if (counter >= maxSpins) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <section className="py-16 px-4 relative z-10 bg-rose-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <div className="mb-10">
           <h2 className="font-script text-5xl text-deep-rose mb-3">Góc Vui Nhộn</h2>
           <p className="font-serif text-gray-600 italic">Bạn sẽ giữ chức vụ gì trong đám cưới của chúng tôi?</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border-4 border-rose-100 p-8 md:p-12 max-w-lg mx-auto transform transition-all hover:shadow-2xl">
            
            {/* Display Area */}
            <div className="min-h-[200px] flex flex-col items-center justify-center mb-8">
                {currentRole ? (
                    <div className={`transition-all duration-300 ${isSpinning ? 'scale-90 opacity-80 blur-[1px]' : 'scale-100 opacity-100'}`}>
                        <div className="text-6xl md:text-8xl mb-4 animate-bounce">
                            {currentRole.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-deep-rose mb-2 font-serif">
                            {currentRole.name}
                        </h3>
                        <p className="text-gray-500 italic px-4">
                            {currentRole.desc}
                        </p>
                    </div>
                ) : (
                    <div className="text-gray-400">
                        <i className="fas fa-question-circle text-6xl mb-4 text-rose-200"></i>
                        <p className="text-lg">Nhấn nút bên dưới để xem định mệnh!</p>
                    </div>
                )}
            </div>

            {/* Button */}
            <button 
                onClick={startSpin}
                disabled={isSpinning}
                className={`
                    group relative px-8 py-4 bg-gradient-to-r from-deep-rose to-rose-500 
                    text-white font-bold rounded-full text-lg shadow-lg 
                    transition-all duration-200 transform
                    ${isSpinning ? 'cursor-not-allowed opacity-80' : 'hover:scale-105 hover:shadow-rose-300/50 hover:shadow-xl active:scale-95'}
                `}
            >
                {isSpinning ? (
                    <span className="flex items-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i> Đang Quay...
                    </span>
                ) : (
                    <span className="flex items-center">
                        <i className="fas fa-dice mr-2 group-hover:rotate-180 transition-transform duration-500"></i> Bốc Thăm Ngay
                    </span>
                )}
            </button>
        </div>
      </div>
    </section>
  );
};

export default LuckyDraw;
