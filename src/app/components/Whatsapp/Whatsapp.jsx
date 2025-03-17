import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatingWhatsapp = () => {
  return (
    <button
      id='whatsapp'
      className=''
    >
      <Link
        href='https://wa.me/+919410888861?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Cars.'
        rel='noopener noreferrer'
        target='_blank'
      >
        <span>
          {' '}
          <FaWhatsapp />
        </span>
      </Link>
    </button>
  );
};

export default FloatingWhatsapp;
