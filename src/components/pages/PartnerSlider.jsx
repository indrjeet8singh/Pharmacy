// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Partner logos
import partner1 from "../../../public/assets/team/partner1.jpg";
import partner2 from "../../../public/assets/team/partner2.jpg";
import partner3 from "../../../public/assets/team/partner3.jpg";
import partner4 from "../../../public/assets/team/partner4.jpg";
import partner5 from "../../../public/assets/team/partner5.jpg";

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  zIndex: 2,
  flexDirection: "column",
};

const imageWrapperStyle = {
  position: "relative",
  width: "100%",
  height: "500px", // Adjust as needed
  overflow: "hidden",
};

const PartnersSlider = () => {
  const partnerLogos = [
    { src: partner1, name: "Partner 1" },
    { src: partner2, name: "Partner 2" },
    { src: partner3, name: "Partner 3" },
    { src: partner4, name: "Partner 4" },
    { src: partner5, name: "Partner 5" },
  ];

  return (
    <div className="container-fluid p-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {partnerLogos.map((partner, index) => (
          <SwiperSlide key={index}>
            <div style={imageWrapperStyle}>
              <img
  src={partner.src}
  alt={partner.name}
  className="w-100 h-100"
  style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(70%)" }}
/>

              <div style={overlayStyle}>
                <h3 className="fw-bold">{partner.name}</h3>
                <p className="mb-0">Trusted partner in healthcare innovation</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
