import React from 'react'
import img4 from "/images/4.png";


const HomeImgContainer = () => {
  return (
    <div>
      <div className="container-fluid my-5 p-0">
        <div className="home-image-container">
            <img src={img4} className="img-fluid mobileheight" alt="Sample Image"/>
            <div className="overlay-text">
                <h3 className='my-3'>Building trust with 50,000+ Healthcare  Providers in Nigeria and Africa.</h3>
                <h3>Strengthening Healthcare in Africa</h3>
                <p>Iphamar is fostering trust and reliability among over 50,000 healthcare providers across Nigeria and Africa.</p>
           <a>
                        <button type="button" className="btn w-25 btn-lg btn-warning">
                        Warning
                      </button>
                      </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeImgContainer
