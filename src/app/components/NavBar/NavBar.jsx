import 'remixicon/fonts/remixicon.css';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './NavBar.css';
import What from '../../assets/whatsapp.png';
import Logo from '../../assets/logos.png';

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const linksRef = useRef([]);
  const animationRef = useRef(null);

  const toggleNavbar = () => {
    if (mobileDrawerOpen) {
      const timeline = gsap.timeline({
        onComplete: () => setMobileDrawerOpen(false),
      });
      timeline.to(drawerRef.current, {
        x: '-100%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.in',
      });
    } else {
      setMobileDrawerOpen(true);
    }
  };

  useEffect(() => {
    if (mobileDrawerOpen) {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline();
        timeline.fromTo(
          drawerRef.current,
          { x: '-100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
        timeline.fromTo(
          linksRef.current,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.2'
        );
      });
      animationRef.current = ctx;
    } else if (animationRef.current) {
      animationRef.current.revert();
    }
    return () => animationRef.current?.revert();
  }, [mobileDrawerOpen]);

  const closeMobileMenu = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-content'>
          <div className='text-container'>
            <a
              href='/'
              className='btn btn-gradient'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src={Logo}
                alt='Logo'
                style={{ width: '120px', height: '30px' }}
              />
            </a>
          </div>
          <ul className='nav-items'>
            <li>
              <a href='#rent'>Rent</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <div className='auth-buttons'>
            <a
              href='tel:+919410888861'
              className='btn'
            >
              <i className='ri-phone-line'></i> +91 9410888861
            </a>
            <a
              href='https://wa.me/+919410888861?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Cars.'
              className='btn btn-gradient'
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Image
                src={What}
                alt='WhatsApp'
                style={{ width: '20px', height: '20px' }}
              />{' '}
              WhatsApp
            </a>
          </div>
          <div className='mobile-menu'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <i className='ri-close-large-fill'></i>
              ) : (
                <i className='ri-menu-3-fill'></i>
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className='mobile-drawer'
            ref={drawerRef}
          >
            <button
              className='close-drawer'
              onClick={closeMobileMenu}
            >
              <i className='ri-close-large-fill'></i>
            </button>
            <ul>
              {[
                { text: '🚘 Rent', href: '#rent' },
                {
                  text: '🛠️ Services',
                  href: '#services',
                },
                { text: '🧑🏻 About', href: '#about' },
                { text: '☎️ Contact', href: '#contact' },
              ].map((item, index) => (
                <li
                  key={item.text}
                  ref={(el) => (linksRef.current[index] = el)}
                >
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                  >
                    <i className={item.icon}></i> {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className='drawer-buttons'>
              <a
                href='tel:9410888861'
                className='btn'
                onClick={closeMobileMenu}
              >
                <i className='ri-phone-line'></i>9410888861
              </a>
              <a
                href='https://wa.me/+919410888861?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Cars.'
                className='btn btn-gradient'
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                onClick={closeMobileMenu}
              >
                <Image
                  src={What}
                  alt='WhatsApp'
                  style={{ width: '20px', height: '20px' }}
                />{' '}
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
