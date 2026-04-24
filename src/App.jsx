import React, { useState, useEffect, useRef } from 'react';
import { Heart, GraduationCap, Briefcase, Award, MessageCircle, Star, Send, Calendar, ChevronRight, Share2, Play, Users } from 'lucide-react';
import graduationImg from './assets/graduation.jpg';
import graduationVideo from './assets/graduation-video.mp4';
import lunchImg from './assets/lunch.jpg';
import backgroundMusic from './assets/VOTAY.mp3';
import { Volume2, VolumeX } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [wish, setWish] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: "Đức Trọng", text: "Vẫn nhớ như in cái hồi t còn chở m đi học mỗi sáng, chớp mắt cái giờ hai đứa thành cử nhân hết rồi. Tự hào về m lắm!", date: "Hôm nay" },
    { id: 2, sender: "Hội Bạn Thân", text: "Chúc mừng Như nhé! Ra trường rồi nhưng đừng quên những buổi trà sữa xuyên lục địa của chúng mình nha.", date: "Hôm nay" }
  ]);
  const [isMuted, setIsMuted] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Tự động phát nhạc khi người dùng click vào bất kỳ đâu trên trang lần đầu
    const handleFirstClick = () => {
      if (audioRef.current && isMuted) {
        toggleMusic();
        document.removeEventListener('click', handleFirstClick);
      }
    };
    document.addEventListener('click', handleFirstClick);
    
    return () => document.removeEventListener('click', handleFirstClick);
  }, [isMuted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Đảm bảo luôn bắt đầu từ giây 40 nếu là lần đầu phát
        if (audioRef.current.currentTime < 40) {
          audioRef.current.currentTime = 40;
        }
        audioRef.current.play().catch(err => console.log("Cần tương tác để phát nhạc"));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleAudioLoad = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 40;
    }
  };

  const startJourney = () => {
    setIsExploding(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 40;
      audioRef.current.play().catch(err => console.log("Lỗi phát nhạc:", err));
      setIsMuted(false);
    }
    setTimeout(() => {
      setShowWelcome(false);
    }, 5000); // Kéo dài thời gian hiệu ứng lên 5 giây để khoảnh khắc trở nên kỳ ảo hơn
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(error => console.log("Autoplay blocked:", error));
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.2 } // Video sẽ phát khi chỉ cần 20% xuất hiện
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleSendWish = () => {
    if (wish.trim()) {
      setMessages([{ id: Date.now(), sender: "Bạn", text: wish, date: "Vừa xong" }, ...messages]);
      setWish('');
    }
  };

  return (
    <div className={`min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-red-100 overflow-x-hidden ${showWelcome ? 'h-screen overflow-hidden' : ''}`}>
      {/* Welcome Overlay - Luxury Invitation Style */}
      {showWelcome && (
        <div className={`fixed inset-0 z-[200] bg-[#faf9f6] flex flex-col items-center justify-center p-6 text-center transition-all duration-1000 ${isExploding ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
          
          {/* Cute Particles Effect - High Density */}
          {isExploding && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute left-1/2 top-1/2 text-2xl animate-fly-away"
                  style={{ 
                    '--tx': `${(Math.random() - 0.5) * 1200}px`,
                    '--ty': `${(Math.random() - 0.5) * 1200}px`,
                    '--rot': `${Math.random() * 1080}deg`,
                    animationDelay: `${Math.random() * 0.5}s`
                  }}
                >
                  {['💖', '✨', '🌸', '🎓', '⭐', '🎈', '🌹'][i % 7]}
                </div>
              ))}
            </div>
          )}

          <div className="max-w-xl w-full relative z-10 space-y-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-red-800 mb-2 mx-auto shadow-xl shadow-red-900/5 relative z-10 border border-red-50">
                <GraduationCap size={44} strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            </div>

            <div className="space-y-4 px-4">
              <h2 className="text-[12px] md:text-[14px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-black text-red-900/40">Exclusive Journey</h2>
              <h1 className="text-4xl md:text-7xl font-serif leading-tight md:leading-[1.1] text-[#1a1a1a]">
                Món quà đặc biệt <br />
                <span className="italic font-normal text-red-800 underline decoration-red-100 underline-offset-8">cho Thảo Như</span>
              </h1>
              <div className="w-12 h-[1px] bg-red-200 mx-auto my-6 md:my-8"></div>
              <p className="text-red-800/60 text-base md:text-lg italic font-serif px-4">
                "Một hành trình rực rỡ được viết tiếp bởi những ước mơ"
              </p>
              <p className="text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest pt-4">
                Created with love by <span className="text-red-700/80">Trọng Đức</span>
              </p>
            </div>

            <div className="pt-8">
              <button 
                onClick={startJourney}
                className="group relative px-12 py-5 bg-[#1a1a1a] text-white rounded-full font-bold text-[13px] tracking-[0.2em] uppercase hover:bg-red-800 hover:scale-105 transition-all duration-500 shadow-2xl active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Bắt đầu hành trình</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 w-full text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300 font-bold px-4">
            Established April 2026 • Graduation Edition
          </div>
        </div>
      )}

      {/* Navigation - Minimalist */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${showWelcome ? 'opacity-0' : 'opacity-100'} backdrop-blur-md bg-white/40 border-b border-gray-100/50`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex justify-between items-center">
          <div className="text-xl font-serif flex items-center gap-2 md:gap-3 group cursor-pointer">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <GraduationCap size={14} />
            </div>
            <span className="uppercase text-[10px] md:text-[12px] tracking-[0.1em] md:tracking-[0.2em] font-black text-[#1a1a1a]">Thảo Như • 2026</span>
          </div>
          <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="bg-[#1a1a1a] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-widest hover:bg-red-800 transition-all shadow-lg active:scale-90">
            Gửi yêu thương
          </button>
        </div>
      </nav>

      {/* Hero Section - Magazine Style */}
      <section className="pt-24 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-800 text-[10px] md:text-[12px] font-black uppercase tracking-[0.1em] mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Star size={10} fill="currentColor" /> The New Leader Chapter
          </div>
          <h1 className={`text-5xl md:text-[9rem] font-serif leading-tight md:leading-[0.85] text-[#1a1a1a] transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            Bùi Ngọc <br className="hidden md:block" />
            <span className="italic text-red-800 md:ml-20 underline decoration-red-100 underline-offset-8">Thảo Như</span>
          </h1>
          <div className="h-12 md:h-20 w-[1px] bg-gradient-to-b from-red-800 to-transparent my-8 md:my-12 animate-bounce"></div>
          <p className="text-gray-400 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[12px] font-black px-4">Bachelor of Business Administration</p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Portrait with Frame */}
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-4 bg-white shadow-2xl rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative z-10 rounded-[1.5rem] overflow-hidden aspect-[4/5] shadow-inner bg-gray-100">
              <img 
                src={graduationImg} 
                alt="Thảo Như Portrait" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[12px] font-black uppercase tracking-widest mb-1 opacity-80">Class of 2026</p>
                <h2 className="text-xl font-serif italic">Pure Elegance</h2>
              </div>
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-[#1a1a1a] text-white p-5 rounded-2xl shadow-2xl hidden md:block rotate-3 group-hover:rotate-0 transition-all">
              <Award className="text-yellow-500 mb-2" size={20} />
              <p className="text-[12px] font-black uppercase tracking-[0.1em]">Excellence Award</p>
            </div>
          </div>

          {/* Video with Blurred Background Effect */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 relative group overflow-hidden">
              <div className="rounded-[2rem] overflow-hidden bg-gray-50 relative flex items-center justify-center min-h-[500px]">
                 {/* Blurred Background Video */}
                 <div className="absolute inset-0 overflow-hidden opacity-30 scale-110 blur-2xl">
                    <video 
                        className="w-full h-full object-cover"
                        muted 
                        loop 
                        playsInline
                        autoPlay
                    >
                        <source src={graduationVideo} type="video/mp4" />
                    </video>
                 </div>

                 {/* Main Video Content */}
                 <video 
                    ref={videoRef}
                    className="relative z-10 w-auto h-full max-h-[500px] shadow-2xl rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    muted 
                    loop 
                    playsInline
                    autoPlay
                 >
                    <source src={graduationVideo} type="video/mp4" />
                 </video>

                 <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                    <span className="text-white text-[12px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">The Ceremony</span>
                 </div>
              </div>
            </div>
            <div className="px-4 space-y-4 text-center md:text-left">
               <h3 className="text-2xl md:text-3xl font-serif italic text-red-900">"Hành trình không mệt mỏi"</h3>
               <p className="text-gray-500 text-sm leading-relaxed font-light italic">
                 Từng bước chân trên bục giảng, từng trang sách lật qua, tất cả đã kết tinh thành nụ cười rạng rỡ của ngày hôm nay. Một cột mốc đáng tự hào cho sự nỗ lực không ngừng của Như.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heartfelt Section - Storytelling Layout */}
      <section className="py-20 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-10 order-2 md:order-1 text-center md:text-left">
              <div className="w-12 h-[1px] bg-red-500 mx-auto md:mx-0"></div>
              <h3 className="text-4xl md:text-6xl font-serif leading-tight">
                Hạnh phúc là <br />
                <span className="italic text-red-500">những khoảnh khắc</span> <br />
                cùng nhau.
              </h3>
              <div className="space-y-6 md:space-y-8 text-gray-400 leading-relaxed font-light text-base md:text-lg italic border-l-0 md:border-l border-red-900/50 pl-0 md:pl-10">
                <p>Gửi Như,</p>
                <p>Ê Như, Chúc mừng đã chính thức 'thoát nạn' kiếp sinh viên nhé, giờ quay đi quay lại đã thấy m cầm tấm bằng đại học trên tay rồi. </p>
                <p>Hành trình mười mấy năm qua, chứng kiến nỗ lực và trưởng thành từng ngày, t thực sự nể phục và tự hào. </p>
                <p>Chúc mừng tân cử nhân nhé, cứ tự tin mà 'quẩy' tiếp chặng đường phía trước, vì lúc nào cũng có mình đứng sau cổ vũ!</p>
                <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-white not-italic font-serif text-base uppercase tracking-widest">
                  <div className="w-10 h-[1px] bg-white/20 hidden md:block"></div>
                  <span>Trọng Đức</span>
                </div>
              </div>
            </div>
            
            <div className="relative group order-1 md:order-2 px-4 md:px-0">
               <div className="absolute -inset-10 bg-red-900/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform rotate-2 md:group-hover:rotate-0 transition-all duration-1000 border-4 md:border-8 border-white/5">
                  <img src={lunchImg} alt="Lunch celebration" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
               </div>
               <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 bg-white text-[#1a1a1a] p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl flex flex-col items-center scale-90 md:scale-100">
                  <Users className="text-red-800 mb-2 md:mb-3" size={24} />
                  <p className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em]">Day One Friends</p>
                  <p className="text-[10px] md:text-[11px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Memories</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messages Section - Elegant Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="text-[12px] md:text-[14px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-black text-red-900/30">Wall of Love</h2>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Dòng tâm tư gửi Như</h2>
          <div className="w-12 h-[1px] bg-red-200 mx-auto mt-4 md:mt-6"></div>
        </div>

        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl shadow-gray-200/40 border border-gray-50">
          <div className="flex flex-col md:flex-row gap-4 mb-10 md:mb-16 relative group">
            <input 
              type="text" 
              placeholder="Viết lời chúc của bạn..." 
              className="flex-1 bg-gray-50 border-none rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:ring-2 focus:ring-red-100 outline-none text-base font-medium transition-all"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendWish()}
            />
            <button onClick={handleSendWish} className="bg-[#1a1a1a] text-white p-4 md:p-5 rounded-2xl hover:bg-red-800 transition-all shadow-xl active:scale-95 flex justify-center items-center">
              <Send size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {messages.map((m) => (
              <div key={m.id} className="group bg-[#faf9f6] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-red-100 transition-all duration-500">
                <div className="flex justify-between items-center mb-4 md:mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 md:h-8 bg-red-800/20 rounded-full"></div>
                    <span className="text-[11px] md:text-[12px] font-black uppercase tracking-widest text-red-900">{m.sender}</span>
                  </div>
                  <Heart size={14} className="text-red-200" />
                </div>
                <p className="text-gray-700 text-sm md:text-base italic font-serif leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">"{m.text}"</p>
                <p className="text-[10px] md:text-[11px] text-gray-300 mt-4 md:mt-6 uppercase tracking-widest font-bold">{m.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="py-20 text-center border-t border-gray-100 bg-white">
        <div className="flex justify-center gap-8 mb-10">
           <Share2 size={20} className="text-gray-300 hover:text-red-800 cursor-pointer transition-colors" />
           <MessageCircle size={20} className="text-gray-300 hover:text-red-800 cursor-pointer transition-colors" />
           <Heart size={20} className="text-gray-300 hover:text-red-800 cursor-pointer transition-colors" />
        </div>
        <p className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-300 mb-2">Designed for Bùi Ngọc Thảo Như</p>
        <p className="text-[11px] font-bold text-red-900/20 uppercase tracking-[0.2em]">A Graduation Gift by Trọng Đức • 2026</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
        h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', serif; }
        @keyframes pulse-red {
          0% { shadow: 0 0 0 0 rgba(185, 28, 28, 0.4); }
          70% { shadow: 0 0 0 10px rgba(185, 28, 28, 0); }
          100% { shadow: 0 0 0 0 rgba(185, 28, 28, 0); }
        }
        @keyframes fly-away {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(var(--rot)) scale(2); opacity: 0; }
        }
        .animate-fly-away {
          animation: fly-away 5s forwards cubic-bezier(0.1, 0.8, 0.3, 1);
        }
      `}} />

      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={backgroundMusic} 
        onLoadedMetadata={handleAudioLoad} 
        loop 
        autoPlay
      />

      {/* Floating Music Toggle */}
      <button 
        onClick={toggleMusic}
        className={`fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isMuted ? 'bg-white text-gray-400' : 'bg-red-700 text-white animate-bounce'}`}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default App;