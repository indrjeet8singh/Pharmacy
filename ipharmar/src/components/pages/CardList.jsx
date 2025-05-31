import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import img1 from '/assets/homePageFirstSlider/1.png'; // Adjust path as needed
import img2 from '/assets/homePageFirstSlider/2.png';
import img3 from '/assets/homePageFirstSlider/3.png';
import img4 from '/assets/homePageFirstSlider/4.png';

const CardList = () => {
  const items = [
    { id: 1, title: 'Impact One', image: img1 },
    { id: 2, title: 'Impact Two', image: img2 },
    { id: 3, title: 'Impact Three', image: img3 },
    { id: 4, title: 'Impact Four', image: img4 },
  ];

  return (
    <div className="container mt-4" style={{ maxWidth: '1200px' }}>
      <h2 className="mb-4 text-center">
        Our <span className="webtextcolor">Impact</span>
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
                height: '350px', // Increased height to accommodate content
                width: '100%',
                position: 'relative',
                overflow: 'hidden', // Prevent content from spilling out
              }}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{
                  height: '100%', // Allocate 60% of card height to image
                  width: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
              />
              <div
                className="card-body d-flex flex-column justify-content-end"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%', // Allocate 40% of card height to card-body
  background: "linear-gradient(to bottom, transparent, #000000e0)",
                  color: '#fff',
                  padding: '15px', // Increased padding for better spacing
                }}
              >
                <h5
                  className="card-title"
                  style={{
                    fontSize: '1.2rem', // Slightly larger font for title
                    marginBottom: '0.75rem',
                  }}
                >
                  ID: {item.id}
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: '0.95rem', // Adjusted font size
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2, // Reduced to 2 lines to avoid overlap
                    WebkitBoxOrient: 'vertical',
                    marginBottom: 0, // Remove default margin for cleaner look
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;