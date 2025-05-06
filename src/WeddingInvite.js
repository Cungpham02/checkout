import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';
import Book from "./Book";

export default function WeddingInvite() {
  useEffect(() => {
    const audio = new Audio("/wedding-music.mp3");
    audio.loop = true;
    audio.play().catch(() => { });
    return () => audio.pause();
  }, []);

  const motionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: false, amount: 0.8 }
  };

  const motionPropsText = {
    initial: { opacity: 0, scale: 0.8 }, // Bắt đầu với opacity 0 và scale nhỏ
    whileInView: { opacity: 1, scale: 1 }, // Khi vào view thì opacity = 1 và scale = 1
    transition: { duration: 1, ease: "easeOut" }, // Thời gian và kiểu easing
    viewport: { once: false, amount: 0.2 } // Điều kiện để kích hoạt lại hiệu ứng khi cuộn
  };

  const motionPropsTextRight = {
    initial: { opacity: 0, x: "100%" }, // Bắt đầu ngoài màn hình (trái sang phải)
    whileInView: { opacity: 1, x: 0 }, // Khi vào view, trượt vào và hiển thị
    transition: { duration: 1, ease: "easeOut" }, // Thời gian và kiểu easing
    viewport: { once: false, amount: 0.2 } // Điều kiện để kích hoạt lại hiệu ứng khi cuộn
  };

  // Groom motion
  const groomRef = useRef(null);
  const isGroomInView = useInView(groomRef, { amount: 0.5 });
  const [groomKey, setGroomKey] = useState(0);
  useEffect(() => {
    if (isGroomInView) setGroomKey(prev => prev + 1);
  }, [isGroomInView]);

  // Bride motion
  const brideRef = useRef(null);
  const isBrideInView = useInView(brideRef, { amount: 0.5 });
  const [brideKey, setBrideKey] = useState(0);
  useEffect(() => {
    if (isBrideInView) setBrideKey(prev => prev + 1);
  }, [isBrideInView]);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-serif">
      <section className="relative h-screen flex items-center justify-center text-center p-4">
        <img
          src="/images/32.jpg"
          alt="Wedding Couple"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ maxWidth: '100%', height: '100vh', objectFit: 'cover', objectPosition: 'center' }}
        />
        <motion.h1
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl md:text-6xl font-bold text-red mb-4"
          {...motionProps}
        >
          Tùng Lâm ❤️ Hồng Khanh
        </motion.h1>
      </section>

      <section className="py-12 px-6 text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-pink-600"
          {...motionProps}
        >
          <div className="invitation-container">
            <div className="content-overlay">
              <div className="quote">
                "Hôn nhân là chuyện cả đời, <br />
                yêu người xứng đáng, cưới người mình thương..."
              </div>
              <div className="family-info">
                <div className="family-column">
                  <strong>NHÀ TRAI</strong><br />
                  ÔNG NGUYỄN ANH KINH<br />
                  BÀ TÊ THỊ HƯƠNG<br />
                  Lộc Tấn, Lộc Ninh,<br />
                  Bình Phước
                </div>
                <div className="heart">❤️</div>
                <div className="family-column">
                  <strong>NHÀ GÁI</strong><br />
                  ÔNG NGUYỄN ANH KINH<br />
                  BÀ TÊ THỊ HƯƠNG<br />
                  Lộc Tấn, Lộc Ninh,<br />
                  Bình Phước
                </div>
              </div>
              <div className="signatures">
                <div>
                  <span>Chú Rể</span>
                  Nguyễn Anh Tài
                </div>
                <div>
                  <span>Cô Dâu</span>
                  Nguyễn Diệu Nữ
                </div>
              </div>
            </div>
          </div>
        </motion.h2>

        <div className="invite-section">
          <div className="photos flex justify-center gap-4 header">
            {/* Ảnh chú rể - từ trái qua phải */}
            <motion.div
              className="photo-frame groom"
              {...isBrideInView}
            >
              <img src="/images/32.jpg" alt="Chú rể" className="rounded-xl shadow-md" />
            </motion.div>

            {/* Ảnh cô dâu - từ phải qua trái */}
            <motion.h2
              className="photo-frame bride"
              {...isBrideInView}
            >
              <img src="/images/32.jpg" alt="Cô dâu" className="rounded-xl shadow-md" />
            </motion.h2>
          </div>
        </div>
      </section>

      <section className=" px-6 text-center bg-white">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-pink-600"
          {...motionPropsText}
        >
          <h1 class="wedding-title">Thư Mời</h1>
          <p class="wedding-subtitle">Tham dự lễ cưới của Khanh & Lâm</p>
          {/* <Book/> */}
        </motion.h2>

      </section>
      <section className="wedding-slider px-4 py-8 bg-white">
        <div className="slider-wrapper">
          <div className="slider-track">
            <img src="/images/32.jpg" alt="Ảnh cưới 1" />
            <img src="/images/32.jpg" alt="Ảnh cưới 2" />
            <img src="/images/32.jpg" alt="Ảnh cưới 3" />
          </div>
        </div>
      </section>
      <motion.div style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }} {...motionPropsText}>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>TIỆC MỪNG LỄ VU QUY</p>
        <p style={{ fontSize: '18px' }}>
          Vào lúc <strong>11h00</strong> | <strong>Thứ 7</strong>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '18px', marginTop: '4px' }}>
          <span>Tháng 2</span>
          <span>|</span>
          <span>16</span>
          <span>|</span>
          <span>2025</span>
        </div>
        <p style={{ fontStyle: 'italic', fontSize: '14px', marginTop: '6px' }}>
          (Tức Ngày 16 Tháng 10 Năm Giáp Thìn)
        </p>
      </motion.div>





      {/* <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Huy & Linh. Thiệp cưới online được tạo bằng ReactJS.
      </footer> */}
    </div>
  );
}
