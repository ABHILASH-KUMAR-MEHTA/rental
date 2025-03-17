import { Fragment, useState } from 'react';
import ScrollToTop from '../components/Scroll/Scroll';
import FloatingWhatsapp from '../components/Whatsapp/Whatsapp';

const LayoutTwo = ({ children }) => {
  const [toggleClassName] = useState(false);

  return (
    <Fragment>
      <div
        className={`body-wrapper ${toggleClassName ? 'ltn__utilize-open' : ''}`}
      >
        {children}
        <ScrollToTop />
        <FloatingWhatsapp />
      </div>
    </Fragment>
  );
};

export default LayoutTwo;
