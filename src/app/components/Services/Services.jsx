import { useEffect, useState } from 'react';
import './Services.css';
import Image from 'next/image';

import car1 from '../../assets/imageses/Car1.png';
import car2 from '../../assets/imageses/Car2.png';
import car3 from '../../assets/imageses/Car3.png';
import car4 from '../../assets/imageses/Car4.png';
import car5 from '../../assets/imageses/Car5.png';
import car6 from '../../assets/imageses/Car6.png';

export const Services = () => {
  const carImages = [car1, car2, car3, car4, car5, car6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <section
      className='services'
      id={'services'}
    >
      <div className='header-text'>
        <h4>Our Services</h4>
        <h3>
          Sit back and experience top-notch service with{' '}
          <span>Every Trip!</span>
        </h3>
      </div>

      <div className='features'>
        <div className='features-column'>
          <div className='feature-item'>
            <div className='sicon'>
              <i class='ri-money-rupee-circle-fill'></i>
            </div>
            <h4>Competitive Pricing</h4>
          </div>

          <div className='feature-item'>
            <div className='sicon'>
              <i class='ri-wallet-3-fill'></i>
            </div>
            <h4>Easier Rent On Your Budget</h4>
          </div>

          <div className='feature-item'>
            <div className='sicon'>
              <i class='ri-bank-card-fill'></i>
            </div>
            <h4>On-Time Guarantee</h4>
          </div>
        </div>

        <div className='service-image'>
          <Image
            src={carImages[currentImageIndex]}
            alt='Car'
          />
        </div>

        <div className='features-column'>
          <div className='feature-item'>
            <div className='sicon'>
              <i class='ri-medal-fill'></i>
            </div>
            <h4>Wide Selection of Vehicles</h4>
          </div>

          <div className='feature-item'>
            <div className='sicon'>
              <i class='ri-user-star-fill'></i>
            </div>
            <h4>Clean and Sanitized Cars</h4>
          </div>

          <div className='feature-item'>
            <div className='sicon'>
              <i class='ri-taxi-wifi-fill'></i>
            </div>
            <h4>Book in one Click</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
