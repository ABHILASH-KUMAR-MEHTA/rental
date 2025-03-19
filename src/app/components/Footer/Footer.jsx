import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-column'>
          <h4>Company</h4>
          <ul>
            <li>
              <a href='#about'>About Us</a>
            </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className='footer-column'>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href='#cars'>Rent a Car</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='footer-column'>
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Booking Guide</li>
          </ul>
        </div>

        <div className='footer-column'>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a
                href='tel:+919410888861'
                target='_blank'
                rel='noopener noreferrer'
              >
                9410888861, 7249918861
              </a>
            </li>
            <li>66/201 Akhand Nagar, Naripura Jagner Road, Agra</li>
          </ul>
        </div>
      </div>

      <div className='footer-line'></div>

      <div className='footer-bottom'>
        <div>
          Copyright © {new Date().getFullYear()} Gangaram Travels |
          <span> Powered by </span>
          <Link
            href='https://nexeor.com/'
            className='inline-block'
          >
            <Image
              src='/assets/images/nexeor.png'
              width={18}
              height={18}
              alt='logo'
              className='inline-block'
            />
          </Link>
          <span>Mehta.Tech</span>
        </div>
        <ul className='list-unstyled d-flex'>
          <li className='ms-3'>
            <a
              className='link-body-emphasis'
              href='https://www.instagram.com/gangaram_travels_agra?igsh=cHMzamp0Z3drbWhi'
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li className='ms-3'>
            <a
              className='link-body-emphasis'
              href='#'
            >
              <FaFacebook size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
