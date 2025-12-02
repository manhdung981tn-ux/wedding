
import React from 'react';
import { weddingData } from './wedding-data';

const LoveStory: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-script text-5xl text-deep-rose mb-3">Love Story</h2>
            <div className="w-16 h-1 bg-rose-gold mx-auto rounded-full mb-4 opacity-50"></div>
            <p className="font-serif text-gray-500 italic text-sm md:text-base">"Yêu là tìm thấy hạnh phúc của mình trong hạnh phúc của người khác"</p>
        </div>
        
        {/* Timeline 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2 order-1 md:order-1">
                <div className="relative p-2 bg-white shadow-lg rounded transform -rotate-2 hover:rotate-0 transition duration-500">
                    <img src={weddingData.loveStory.firstMeet} className="w-full h-64 md:h-80 object-cover rounded filter sepia-[.2] hover:sepia-0 transition" alt="First Meet" />
                </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left order-2 md:order-2">
                <h3 className="text-2xl md:text-3xl font-serif text-deep-rose font-bold mb-3">Ngày Đầu Gặp Gỡ</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-sm md:text-base">"Chỉ một ánh mắt tình cờ tại quán cà phê góc phố, Dũng đã biết mình muốn tìm hiểu về cô gái đang ngồi đọc sách bên cửa sổ."</p>
                <div className="mt-4 inline-block px-4 py-1 bg-white border border-rose-200 text-deep-rose rounded-full text-xs font-bold uppercase tracking-widest">Mùa Thu 2020</div>
            </div>
        </div>

        {/* Timeline 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-center md:text-right order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-serif text-deep-rose font-bold mb-3">Lời Cầu Hôn</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-sm md:text-base">"Dưới ánh hoàng hôn Đà Lạt thơ mộng, anh đã quỳ xuống và em đã nói 'Em đồng ý'. Khoảnh khắc ấy thời gian như ngừng trôi."</p>
                <div className="mt-4 inline-block px-4 py-1 bg-white border border-rose-200 text-deep-rose rounded-full text-xs font-bold uppercase tracking-widest">Mùa Đông 2024</div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10 order-1 md:order-2">
                <div className="relative p-2 bg-white shadow-lg rounded transform rotate-2 hover:rotate-0 transition duration-500">
                    <img src={weddingData.loveStory.proposal} className="w-full h-64 md:h-80 object-cover rounded filter sepia-[.2] hover:sepia-0 transition" alt="Proposal" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default LoveStory;
