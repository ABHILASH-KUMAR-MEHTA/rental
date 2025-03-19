import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import './HeroSection.css';
import appleImage from '../../assets/Apple.png';
import CarImage from '../../assets/HeroCar.png';
import WhatsAppImage from '../../assets/whatsapp.png';

export const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.8 },
      { scale: 1, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <main>
      <section className='hero-image-container'>
        <div className='orange-box'></div>
        <Image
          ref={imageRef}
          src={CarImage}
          alt='Car'
          className='car-image'
        />
      </section>

      <section
        className='text-section'
        ref={textRef}
      >
        <h1>
          Rides Made Affordable! <span>Anytime</span> & <span>Anywhere</span>
        </h1>
        <p>
          Rent the perfect car for any trip with GangaRam. Enjoy flexible
          options, great prices, and a hassle-free experience. Get started in a
          few clicks!
        </p>

        <div className='app-links'>
          <a
            href='#cars'
            className='btn btn-gradient'
          >
            <Image
              src={appleImage}
              alt='Apple Store'
              width={60}
              height={30}
            />
            See Our Cars
          </a>

          <a
            href='https://wa.me/+919410888861?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car.'
            className='btn btn-gradient'
          >
            <Image
              src={WhatsAppImage}
              alt='WhatsApp'
              width={30}
              height={30}
            />
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
};
