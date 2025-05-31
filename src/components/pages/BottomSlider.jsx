import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import img1 from '/assets/bottomSlider/1.png'; // Adjust path as needed
import img2 from '/assets/bottomSlider/2.png';
import img3 from '/assets/bottomSlider/3.png';
import img4 from '/assets/bottomSlider/4.png';
import img5 from '/assets/bottomSlider/5.png';
import img6 from '/assets/bottomSlider/6.png';
import img7 from '/assets/bottomSlider/7.png';


const BottomSlider = () => {
  const items = [
    { id: 1, title: 'Impact One', image: img1 },
    { id: 2, title: 'Impact Two', image: img2 },
    { id: 3, title: 'Impact Three', image: img3 },
    { id: 4, title: 'Impact Four', image: img4 },
     { id: 5, title: 'Impact Two', image: img5 },
    { id: 6, title: 'Impact Three', image: img6 },
    { id: 7, title: 'Impact Four', image: img7 },
  ];

  return (
    <div className="container mt-4" style={{ maxWidth: '1200px' }}>
      <h2 className="mb-4 text-center">
        Our <span className="webtextcolor">Manifacturing Partners</span>
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="card shadow"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BottomSlider;