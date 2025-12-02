import React, { useState } from 'react';

interface WishItem {
  id: number;
  name: string;
  guestType: string;
  message: string;
  date: string;
  attendees?: number;
}

const Wishes: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Initial dummy data
  const [wishes, setWishes] = useState<WishItem[]>([
    { 
        id: 1, 
        name: "Hoàng Minh", 
        guestType: "Nhà Trai", 
        message: "Chúc hai bạn trăm năm hạnh phúc, sớm sinh quý tử nhé! Rất tiếc vì công tác xa không về dự được.", 
        date: "20/12/2025",
        attendees: 1
    },
    { 
        id: 2, 
        name: "Thùy Linh", 
        guestType: "Nhà Gái", 
        message: "Cô dâu xinh quá! Chúc mừng hạnh phúc nha. Hẹn gặp mọi người vào ngày trọng đại.", 
        date: "19/12/2025",
        attendees: 2
    },
    { 
        id: 3, 
        name: "Tuấn Anh", 
        guestType: "Nhà Trai", 
        message: "Happy Wedding! Mãi bên nhau bạn nhé. 1, 2, 3 zô!", 
        date: "18/12/2025",
        attendees: 1
    }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const guestType = formData.get('guest_of') as string;
    const attendeesVal = formData.get('attendees');
    const attendees = attendeesVal ? parseInt(attendeesVal as string, 10) : 1;
    const message = formData.get('message') as string;
    
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCrw6aKIrFRn7nvevv-yhTAoK2lcs45p2ZBjmrq3J25Vvnian7ENmijHCWArQsc6li/exec";

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Required for Google Apps Script Web Apps
        });

        setLoading(false);
        setSubmitted(true);
        
        // Add new wish to the top of the list locally (Optimistic update)
        const newWish: WishItem = {
            id: Date.now(),
            name: name || "Giấu tên",
            guestType: guestType || "Khách mời",
            message: message,
            date: new Date().toLocaleDateString('vi-VN'),
            attendees: attendees
        };
        
        setWishes(prev => [newWish, ...prev]);

        // Show success message for 3 seconds then reset
        setTimeout(() => {
             setSubmitted(false);
             form.reset();
        }, 3000);

    } catch (error) {
        console.error("Error submitting form", error);
        setLoading(false);
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 relative z-10 bg-gradient-to-t from-white to-soft-pink">
        <style>{`
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(15px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .wish-card-animate {
                animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
            }
        `}</style>

        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-rose-100 mb-16">
            <div className="p-8 md:p-12 text-center">
                <i className="fas fa-envelope-open-text text-4xl text-rose-300 mb-4 animate-bounce"></i>
                <h3 className="font-script text-5xl text-deep-rose mb-2">Gửi Lời Chúc</h3>
                <p className="font-serif text-gray-500 italic mb-8">Sự hiện diện và những lời chúc phúc của bạn là niềm vinh hạnh lớn nhất của chúng tôi.</p>
                
                <form className="space-y-5 text-left" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1 ml-1">Họ tên của bạn</label>
                        <input name="name" required type="text" className="w-full bg-rose-50 border-b-2 border-rose-100 p-3 rounded focus:outline-none focus:border-deep-rose transition placeholder-gray-400" placeholder="VD: Nguyễn Văn A" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1 ml-1">Bạn là khách của</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer bg-rose-50 px-4 py-2 rounded-full border border-rose-100 hover:bg-rose-100 transition">
                                <input type="radio" name="guest_of" value="Nhà Trai" className="accent-deep-rose" defaultChecked /> Nhà Trai
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer bg-rose-50 px-4 py-2 rounded-full border border-rose-100 hover:bg-rose-100 transition">
                                <input type="radio" name="guest_of" value="Nhà Gái" className="accent-deep-rose" /> Nhà Gái
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1 ml-1">Số người tham dự</label>
                        <input 
                            name="attendees"
                            required 
                            type="number" 
                            min="1" 
                            max="10"
                            defaultValue="1"
                            className="w-full bg-rose-50 border-b-2 border-rose-100 p-3 rounded focus:outline-none focus:border-deep-rose transition placeholder-gray-400" 
                            placeholder="Số lượng" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1 ml-1">Lời nhắn gửi</label>
                        <textarea name="message" required rows={4} className="w-full bg-rose-50 border-b-2 border-rose-100 p-3 rounded focus:outline-none focus:border-deep-rose transition placeholder-gray-400" placeholder="Viết lời chúc tốt đẹp nhất..."></textarea>
                    </div>
                    <button 
                        type="submit"
                        disabled={loading || submitted}
                        className={`w-full font-sans font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition duration-300 mt-4 flex items-center justify-center
                            ${submitted ? 'bg-green-600 text-white' : 'bg-deep-rose text-white hover:bg-rose-700 hover:shadow-xl hover:-translate-y-1'}
                        `}
                    >
                        {loading ? (
                             <i className="fas fa-spinner fa-spin mr-2"></i>
                        ) : submitted ? (
                            <>
                                <i className="fas fa-check mr-2"></i> Đã Gửi Thành Công
                            </>
                        ) : (
                            <>
                                <i className="fas fa-paper-plane mr-2"></i> Gửi Lời Chúc
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>

        {/* Wishes List / Guestbook */}
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
                <h3 className="font-script text-4xl text-deep-rose mb-2">Sổ Lưu Bút</h3>
                <div className="w-12 h-0.5 bg-rose-300 mx-auto opacity-60"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishes.map((wish, index) => (
                    <div 
                        key={wish.id} 
                        className="wish-card-animate bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition duration-300 flex flex-col relative group"
                        style={{ animationDelay: `${index < 9 ? index * 150 : 0}ms` }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-deep-rose font-bold font-serif">
                                    {wish.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">{wish.name}</h4>
                                    <p className="text-[10px] text-gray-400">{wish.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`block text-[10px] px-2 py-1 rounded-full border uppercase tracking-wider mb-1 ${
                                    wish.guestType === 'Nhà Trai' 
                                    ? 'bg-blue-50 text-blue-800 border-blue-100' 
                                    : 'bg-pink-50 text-pink-800 border-pink-100'
                                }`}>
                                    {wish.guestType}
                                </span>
                                {wish.attendees && (
                                    <span className="text-[10px] text-gray-500">
                                        <i className="fas fa-user-friends mr-1"></i>
                                        {wish.attendees} người
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex-grow pb-2">
                             <p className="font-serif italic text-gray-600 text-sm leading-relaxed">"{wish.message}"</p>
                        </div>
                        
                        {/* Hover Heart Icon */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                            <i className="fas fa-heart text-rose-300 hover:text-deep-rose cursor-pointer text-lg"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Wishes;