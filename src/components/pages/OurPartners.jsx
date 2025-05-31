import React from 'react';
import img1 from '/assets/bottomSlider/1.png';
import img2 from '/assets/bottomSlider/2.png';
import img3 from '/assets/bottomSlider/3.png';

const OurPartners = () => {
  const items = [
    { id: 1, title: 'Impact One', image: img1 },
    { id: 2, title: 'Impact Two', image: img2 },
    { id: 3, title: 'Impact Three', image: img3 },
  ];

  return (
    <div
      className="container-fluid py-5 "
    >
     

      <div className="container">
        <div className="row justify-content-center g-4">
          {items.map((item) => (
            <div key={item.id} className="col-10 col-sm-6 col-md-4">
              <div className="card shadow-sm text-center p-3">
                <img
                  src={item.image}
                  className="card-img-top mx-auto"
                  alt={item.title}
                  style={{ height: '150px', width: '70%', objectFit: 'contain' }}
                  onError={(e) =>
                    (e.target.src = 'https://via.placeholder.com/150')
                  }
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
