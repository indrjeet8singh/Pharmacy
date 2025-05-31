import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import img1 from '/assets/homePage2slider/1.png'; 
import img2 from '/assets/homePage2slider/2.png';
import img3 from '/assets/homePage2slider/3.png';
import img4 from '/assets/homePage2slider/4.png';


const OurSolution = () => {
   const items = [
     { id: 1, title: 'Impact One', image: img1 },
     { id: 2, title: 'Impact Two', image: img2 },
     { id: 3, title: 'Impact Three', image: img3 },
     { id: 4, title: 'Impact Four', image: img4 },
   ];
 

  return (
    <div className="container-fluid p-0 solution-bg-color">
      <div className="container p-3 mt-4">
        <h2 className="mb-4 text-center">
          Our <span className="webtextcolor">Solution</span>
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          { items.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="card custom-card bg-transparent h-100 p-0">
                <img
                  src={data.image} // Corrected from photo.img to data.image
                  className="card-img-top"
                  alt={data.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column bg-transparent">
                  <h5 className="card-title">ID: {data.id}</h5>
                  <p className="card-text">{data.title}</p>
                </div>
                <div className="button-area text-center mt-2">
                  <button className="btn btn-primary solution-btn">Solution</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurSolution;