import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Download.css';
import appleImage from '../../assets/Apples.png';
import playStoreImage from '../../assets/PlayStore.png';
import footerImage from '../../assets/FooterCar.png';

gsap.registerPlugin(ScrollTrigger);

export const Download = () => {
  useEffect(() => {
    const carImage = document.querySelector('.right-img img');

    gsap.fromTo(
      carImage,
      { x: '100%' },
      {
        x: '0%',
        scrollTrigger: {
          trigger: carImage,
          start: 'bottom bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className='download'>
      <div className='left-text'>
        <div className='only-text'>
          <h2>Download the free Gangaram Travels App</h2>
          <h4>for faster, easier booking and exclusive deals (Coming Soon).</h4>
        </div>
        <div className='app-links'>
          <button className='app-btn'>
            <div className='app-logos'>
              <Image
                src={playStoreImage}
                alt='Play Store'
              />
            </div>
            <div className='app-text'>
              <h5>Download from Play Store</h5>
            </div>
          </button>
          <button className='app-btn'>
            <div className='app-logo'>
              <Image
                src={appleImage}
                alt='Play Store'
              />
            </div>
            <div className='app-text'>
              <h5>Download from Apple Store</h5>
            </div>
          </button>
        </div>
      </div>

      <div className='right-img'>
        <Image
          src={footerImage}
          alt='car'
          className='img'
        />
      </div>
    </section>
  );
};
