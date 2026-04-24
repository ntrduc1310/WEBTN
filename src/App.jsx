import React, { useState, useEffect } from 'react';
import { Heart, GraduationCap, Briefcase, Award, MessageCircle, Star, Send, Calendar, ChevronRight, Share2 } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [wish, setWish] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: "Gia đình", text: "Tự hào về con lắm! Chúc mừng tân cử nhân xuất sắc.", date: "Hôm nay" },
    { id: 2, sender: "Nhóm bạn thân", text: "Bốn năm đại học cuối cùng cũng hái quả ngọt rồi. CEO tương lai ơi!", date: "Vừa xong" }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSendWish = () => {
    if (wish.trim()) {
      setMessages([{ id: Date.now(), sender: "Bạn", text: wish, date: "Vừa xong" }, ...messages]);
      setWish('');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-red-100">
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <GraduationCap className="text-red-700" />
            <span className="uppercase text-sm tracking-[0.2em]">The Graduation '26</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-semibold">
            <button className="hover:text-red-700 transition-colors">Trang chủ</button>
            <button className="hover:text-red-700 transition-colors">Hành trình</button>
            <button className="hover:text-red-700 transition-colors">Lời chúc</button>
          </div>
          <button className="bg-red-700 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-red-800 transition-all shadow-lg shadow-red-700/20">
            GỬI YÊU THƯƠNG
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-[10px] font-black uppercase tracking-widest mb-6">
              <Star size={12} fill="currentColor" /> Bachelor of Business Administration
            </div>
            <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-8">
              The <span className="italic text-red-800">New</span> <br /> 
              Chapter Begins.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
              Chúc mừng cô bạn thân nhất của tôi đã chính thức trở thành tân cử nhân Quản trị Kinh doanh. Một hành trình mới đầy hứa hẹn đang chờ đón một CEO tương lai tài năng.
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2 ml-2">
                <b>12+ bạn bè</b> đã gửi lời chúc mừng
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
              {/* Đã cập nhật: Sử dụng ảnh từ thư mục public */}
              <img 
                src="/hình tn.jpg" 
                alt="Chân dung Tân Cử nhân" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4e]/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-light tracking-widest uppercase opacity-80 mb-1">Class of 2026</p>
                <h2 className="text-3xl font-serif">Future Leader</h2>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid Info */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 grid-rows-2 gap-4">
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-700 mb-6">
                <Briefcase size={24} />
              </div>
              <h3 className="text-3xl font-serif mb-4">Quản trị <br />Kinh doanh</h3>
              <p className="text-gray-500 leading-relaxed">Sẵn sàng chinh phục những nấc thang mới với tư duy của một nhà lãnh đạo trẻ.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between uppercase text-[10px] font-bold tracking-widest">
              <span>University Excellence</span>
              <Award className="text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-[#1a2a4e] text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <h4 className="text-4xl font-serif mb-2">GPA</h4>
            <p className="text-red-400 text-2xl font-bold">Excellent</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-red-700">
              <Calendar size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Thời điểm</span>
            </div>
            <p className="text-xl font-serif">Tháng 4, 2026</p>
          </div>

          <div className="md:col-span-2 bg-red-50 rounded-3xl p-8 flex items-center justify-between">
            <p className="font-serif text-red-900 text-lg">"Dám ước mơ, dám thực hiện"</p>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-700 shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Lời chúc từ trái tim</h2>
        </div>

        <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 mb-12">
          <div className="flex gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Nhập lời chúc..." 
              className="flex-1 bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-100 outline-none text-sm"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
            />
            <button 
              onClick={handleSendWish}
              className="bg-red-700 text-white p-4 rounded-2xl hover:bg-red-800 transition-all"
            >
              <Send size={20} />
            </button>
          </div>

          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
            {messages.map((m) => (
              <div key={m.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex justify-between items-start mb-2 text-[10px] font-black uppercase tracking-widest text-red-800">
                  <span>{m.sender}</span>
                  <span className="text-gray-400">{m.date}</span>
                </div>
                <p className="text-gray-700 text-sm italic">"{m.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-red-700">
            <Heart size={16} fill="#dc2626" className="text-red-600" /> Yêu thương
          </button>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-red-700">
            <Share2 size={16} /> Chia sẻ
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        © 2026 Graduation Special Edition
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', serif; }
      `}} />
    </div>
  );
};

export default App;