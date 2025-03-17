import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using Image for optimization
import './CarBrands.css';
import Benz from '../../assets/Car_Brands/Benz.png';
import Bmw from '../../assets/Car_Brands/BMW.png';
import Jaguar from '../../assets/Car_Brands/Jaguar.png';
import Audi from '../../assets/Car_Brands/Audi.png';
import Tata from '../../assets/Car_Brands/Tata.png';
import Mahindra from '../../assets/Car_Brands/Mahindra.png';

gsap.registerPlugin(ScrollTrigger);

export const CarBrands = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Select the container of logos and apply animation to the <div> wrappers
    const logos = Array.from(
      containerRef.current.querySelectorAll('.logo-wrapper')
    );

    // GSAP Animation function
    const animateLogos = () => {
      // Animate the first three logos (from the left)
      gsap.fromTo(
        logos.slice(0, 3),
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
        }
      );

      // Animate the next three logos (from the right)
      gsap.fromTo(
        logos.slice(3),
        { x: '100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
        }
      );
    };

    // ScrollTrigger configuration
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'bottom bottom',
      onEnter: animateLogos,
      onLeaveBack: () => ScrollTrigger.refresh(),
    });
  }, []);

  return (
    <section
      className='car-brands-section'
      ref={containerRef}
    >
      <div className='car-heading'>
        <h4>
          Our Partners<span className='partner'>🫱🏻‍🫲🏻</span>
        </h4>
      </div>
      <div className='logo-container'>
        <div className='logo-wrapper'>
          <Image
            src={Benz}
            alt='Benz'
          />
        </div>
        <div className='logo-wrapper'>
          <Image
            className='bmw-logo'
            src={Bmw}
            alt='BMW'
          />
        </div>
        <div className='logo-wrapper'>
          <Image
            src={Jaguar}
            alt='Jaguar'
          />
        </div>
        <div className='logo-wrapper'>
          <Image
            src={Tata}
            alt='Tata'
          />
        </div>
        <div className='logo-wrapper'>
          <Image
            src={Mahindra}
            alt='Mahindra'
          />
        </div>
        <div className='logo-wrapper'>
          <Image
            src={Audi}
            alt='Audi'
          />
        </div>
      </div>
    </section>
  );
};
