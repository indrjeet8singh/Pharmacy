// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Images
import slide1 from "/images/4.png";
import slide2 from "/images/2.png";
import slide3 from "/images/3.png";
import playstore from "/images/playstore.png";
import applestore from "/images/applestore.png";


// CSS classes can be moved to external file if needed
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  padding: "1rem",
  zIndex: 2,
};

const slideWrapper = {
  position: "relative",
};

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {[slide1, slide2, slide3].map((slide, index) => (
        <SwiperSlide key={index}>
          <div style={slideWrapper}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="img-fluid mobileimg"
            />
            <div style={overlayStyle}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="text-center fw-bold fontmobile ">
                      Building trust with 50,000+ Healthcare Providers in
                      Nigeria and Africa.
                    </h3>
                    <p className="text-center mobilepara">
                      Building trust with 50,000+ Healthcare Providers in
                      Nigeria and Africa.
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <a>
                        <button type="button" class="btn btn-lg btn-warning">
                        Warning
                      </button>
                      </a>
                      <a>
                        <button
                        type="button"
                        class="btn btn-lg btn-outline-light"
                      >
                        Secondary
                      </button>
                      </a>
                    </div>
                    <div className="d-flex align-items-center py-5 justify-content-center gap-4">
                     <div>
                      <a ><img src={playstore}/></a>
                     </div>
                       <div>
                      <a><img src={applestore}/></a>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
