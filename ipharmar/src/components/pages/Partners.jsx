import React from 'react';
import PartnersSlider from './PartnerSlider';

import img1 from '/assets/homePage2slider/1.png';
import img2 from '/assets/homePage2slider/2.png';
import img3 from '/assets/homePage2slider/3.png';
import img4 from '/assets/homePage2slider/4.png';
import AlternatingText from './AlternatingText';

const Partners = () => {
  // Optional: Texts for each image
  const overlayTexts = [
    "Innovating Healthcare Access",
    "Trusted by 50,000+ Providers",
    "Connecting Communities",
    "Delivering with Compassion",
  ];

  const images = [img1, img2, img3, img4];

  return (
    <>
      <PartnersSlider />
      <div className="container p-0 my-5">
        <div className="row g-5">
          {images.map((img, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              <div style={{ position: 'relative' }}>
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    filter: 'brightness(70%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    zIndex: 2,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    padding: '1rem',
                  }}
                >
                  {overlayTexts[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AlternatingText/>
      <div className='container-fluid p-0'> 
       
        <div className='row'>
<div className='col-lg-3 col-md-3 col-sm-0'>

</div>
<div className='col-lg-6 col-md-6 col-sm-12'>
<div className='container m-auto  p-5 footerwala-bg'>
<h2 className='text-center'>Join Us creating a healthier Future</h2>
<div className='d-flex align-items-center justify-content-center m-5'>
  <button className='btn text-center bg-white w-50'>Join For Create</button>
</div>
</div>
</div>
<div className='col-lg-3 col-md-3 col-sm-0'>

</div>

        </div>

      </div>
    </>
  );
};

export default Partners;
