import React from 'react';
import img1 from "/assets/homePage2slider/1.png";
import img2 from "/assets/homePage2slider/2.png";
import img3 from "/assets/homePage2slider/3.png";

const OurLatestUpdate = () => {
  const items = [
    {
      id: 1,
      title: 'Impact One',
      image: img1,
      description: 'Trusted partner delivering top-quality products. Supporting global healthcare innovation.',
    },
    {
      id: 2,
      title: 'Impact Two',
      image: img2,
      description: 'Leading manufacturer with cutting-edge technology. Ensuring consistent supply chain efficiency.',
    },
    {
      id: 3,
      title: 'Impact Three',
      image: img3,
      description: 'Committed to safety and quality assurance. Partnering for a healthier tomorrow.',
    },
  ];

  return (
    <div
      className="container-fluid py-5"

    >
      <h2 className="text-start mb-4">
        Our <span className="text-success">Latest Update</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center g-4">
          {items.map((item) => (
            <div key={item.id} className="col-10 col-sm-6 col-md-4">
              <div className="card shadow-sm text-center p-3 h-100">
                <img
  src={item.image}
  className="card-img-top mx-auto scale-hover"
  alt={item.title}
  style={{
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  }}
  onError={(e) =>
    (e.target.src = 'https://via.placeholder.com/150')
  }
/>

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text" style={{ fontSize: '0.95rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLatestUpdate;
