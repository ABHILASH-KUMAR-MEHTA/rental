import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import './footers.css';
import { Footer } from '../Footer/Footer';
import Logo from '../../assets/logos.png';

const Footers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendToWhatsApp = () => {
    const whatsappNumber = '+919410888861'; // ✅ Updated WhatsApp number
    const whatsappMessage = `*Contact Inquiry:*\n\n📌 *Name:* ${name}\n📩 *Email:* ${email}\n📞 *Phone:* ${phone}\n📌 *Subject:* ${subject}\n📝 *Message:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <>
      <footer
        className='ltn__footer-area'
        id='contact'
      >
        <div className='footer-top-area section-bg-2 plr--5'>
          <Container>
            <Row>
              {/* Left Column - About Section */}
              <Col
                xs={12}
                sm={6}
                xl={4}
              >
                <div className='footer-widget footer-about-widget'>
                  <div className='footer-logo'>
                    <div className='site-logo '>
                      <Image
                        src={Logo}
                        alt='Logo'
                        width={200}
                      />
                    </div>
                  </div>
                  <div className='para'>
                    <p>
                      Premium car rental services at an affordable cost and an
                      ensuring comfort and reliability.
                    </p>
                    <p>
                      <strong>Address:</strong> 66/201 Akhand Nagar, Naripura
                      Jagner Road, Agra
                    </p>
                    <p>
                      <strong>Phone:</strong> 9410888861, 7249918861
                    </p>
                  </div>
                </div>
              </Col>

              {/* Right Column - Contact Form */}
              <Col
                xs={12}
                sm={6}
                xl={8}
              >
                <div className='d-flex flex-column'>
                  <div className='footer-widget contact-container footer-newsletter-widget'>
                    <h4 className='contact-title'>{"Let's Connect"}</h4>
                    <div
                      className='d-flex gap-2'
                      style={{ justifyContent: 'space-between', width: '100%' }}
                    >
                      <Row
                        style={{ width: '100%', margin: '0' }}
                        className='gap-2'
                      >
                        <Col style={{ padding: '0' }}>
                          <div
                            className='d-flex flex-column gap-2'
                            style={{ width: '100%' }}
                          >
                            <input
                              className='contact-input'
                              placeholder='Name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <input
                              className='contact-input'
                              placeholder='E-mail'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </Col>
                        <Col style={{ padding: '0' }}>
                          <div
                            className='d-flex flex-column gap-2'
                            style={{ width: '100%' }}
                          >
                            <input
                              className='contact-input'
                              type='number'
                              inputMode='numeric'
                              placeholder='Phone'
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <input
                              className='contact-input'
                              placeholder='Subject'
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <textarea
                      className='custom-textarea mt-10'
                      placeholder='Message'
                      cols={20}
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className='d-flex justify-content-center'>
                      <button
                        className='sender'
                        onClick={handleSendToWhatsApp}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      <Footer />
    </>
  );
};

export default Footers;
