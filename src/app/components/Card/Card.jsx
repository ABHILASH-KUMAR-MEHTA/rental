import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import featureIcon_1 from '../../assets/images/ship-one.jpg';
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { format, isTomorrow, isToday } from 'date-fns';
import yatch_seven from '../../assets/car1.jpg';
import car2 from '../../assets/car11.jpg';
import car3 from '../../assets/car12.jpg';
import car4 from '../../assets/car13.jpg';
import car5 from '../../assets/car14.jpg';
import car6 from '../../assets/car15.jpg';
import car7 from '../../assets/car16.jpg';
import car8 from '../../assets/car18.jpeg';
import car9 from '../../assets/car17.jpg';
import { Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Dater from './Date';

const properties = [
  {
    id: 1,
    title: 'Innova Crysta',
    address: '6+1 Seater, Agra',
    image: yatch_seven,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car1/car01.jpg' },
      { src: '/img/car1/car02.jpeg' },
      { src: '/img/car1/car03.jpeg' },
      { src: '/img/car1/car04.jpeg' },
      { src: '/img/car1/car05.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 4000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 16',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '6+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 2,
    title: 'Kia Carens',
    address: '6+1 Seater, Agra',
    image: car2,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car2/car01.jpg' },
      { src: '/img/car2/car02.jpeg' },
      { src: '/img/car2/car03.jpeg' },
      { src: '/img/car2/car04.jpeg' },
      { src: '/img/car2/car05.jpeg' },
      { src: '/img/car2/car06.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3500',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 13',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '6+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 3,
    title: 'Ertiga',
    address: '6+1 Seater, Agra',
    image: car3,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car3/car01.jpg' },
      { src: '/img/car3/car02.jpeg' },
      { src: '/img/car3/car03.jpeg' },
      { src: '/img/car3/car04.jpeg' },
      { src: '/img/car3/car05.jpeg' },
      { src: '/img/car3/car06.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 12',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '6+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 4,
    title: 'Honda Amaze',
    address: '4+1 Seater, Agra',
    image: car4,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car4/car01.jpg' },
      { src: '/img/car4/car02.jpeg' },
      { src: '/img/car4/car03.jpeg' },
      { src: '/img/car4/car04.jpeg' },
      { src: '/img/car4/car05.jpeg' },
      { src: '/img/car4/car06.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 10.50',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '6+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 5,
    title: 'Maruthi Ciaz',
    address: '4+1 Seater, Agra',
    image: car5,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car5/car01.jpg' },
      { src: '/img/car5/car02.jpeg' },
      { src: '/img/car5/car03.jpeg' },
      { src: '/img/car5/car04.jpeg' },
      { src: '/img/car5/car05.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 10.50',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '4+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 6,
    title: 'Swift Dzire',
    address: '4+1 Seater, Agra',
    image: car6,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car6/car01.jpg' },
      { src: '/img/car6/car02.jpeg' },
      { src: '/img/car6/car03.jpeg' },
      { src: '/img/car6/car04.jpeg' },
      { src: '/img/car6/car05.jpeg' },
      { src: '/img/car6/car06.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 10',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '4+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 7,
    title: 'Hyundai Aura',
    address: '4+1 Seater, Agra',
    image: car7,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car7/car01.jpg' },
      { src: '/img/car7/car02.jpeg' },
      { src: '/img/car7/car03.jpeg' },
      { src: '/img/car7/car04.jpeg' },
      { src: '/img/car7/car05.jpeg' },
      { src: '/img/car7/car06.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 9',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '4+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 8,
    title: 'Toyota Glanza',
    address: '4+1 Seater, Agra',
    image: car8,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car8/car01.jpeg' },
      { src: '/img/car8/car02.jpeg' },
      { src: '/img/car8/car03.jpeg' },
      { src: '/img/car8/car04.jpeg' },
      { src: '/img/car8/car05.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 10',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '4+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
  {
    id: 9,
    title: 'Toyota Platinum Etios',
    address: '4+1 Seater, Agra',
    image: car9,
    features: [{ label: 'Our Promise', icon: featureIcon_1 }],
    images: [
      { src: '/img/car9/car01.jpg' },
      { src: '/img/car9/car02.jpeg' },
      { src: '/img/car9/car03.jpeg' },
      { src: '/img/car9/car04.jpeg' },
      { src: '/img/car9/car05.jpeg' },
      { src: '/img/car9/car06.jpeg' },
    ],
    feature: [
      'No hidden charges, transparent pricing',
      'Luxury & economy options available',
      'Fully air-conditioned',
      'Discounts on long-term rentals',
    ],
    length: '₹ 3000',
    length2: '',
    fullDayPrice: '₹ 17',
    hourlyPrice: '₹ 10',
    alternativePrice: 599.0,
    currency: '₹',
    guests: '4+1 Seater',
    count: 16,
    objectPosition: 'bottom',
  },
];

const ProductItem = ({ customClasses }) => {
  const [selectedType, setSelectedType] = useState('');
  const itemsPerPage = 20; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Pagination navigation
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [guestCount, setGuestCount] = useState(120);
  const [timeRange, setTimeRange] = useState([540, 1080]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [randomNumbers, setRandomNumbers] = useState({});

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const handleCalendarIconClick = (e) => {
    e.stopPropagation();
    setDisplayCalendar(!displayCalendar);
  };

  const formatDate = (date) => {
    if (isToday(date)) return `${format(date, 'dd MMM yyyy')}, Today`;
    if (isTomorrow(date)) return `${format(date, 'dd MMM yyyy')}, Tomorrow`;
    return format(date, 'dd MMM yyyy');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const CustomInput = React.forwardRef(({ value, onClick, date }, ref) => (
    <div
      className='date-input'
      onClick={onClick}
      ref={ref}
    >
      <div className='d-flex items-center'>
        {date ? formatDate(date) : '-- / -- / ----'}
        <div
          className='calendar-icon'
          onClick={handleCalendarIconClick}
          style={{ marginLeft: '2rem' }}
        >
          <Image
            src='/img/icons/calendar.png'
            width='35'
            height='35'
          />
        </div>
      </div>
    </div>
  ));

  CustomInput.displayName = 'CustomInput';

  useEffect(() => {
    const result = properties.filter((property) => {
      const matchesType = !selectedType || property.type === selectedType;

      return (
        guestCount &&
        // property.charterTime[0] >= timeRange[0] &&
        // property.charterTime[1] <= timeRange[1] &&
        matchesType
      );
    });

    setFilteredProperties(result);
  }, [guestCount, timeRange, selectedDate, totalPages, selectedType]);

  const convertMinutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const period = hours < 12 ? 'AM' : 'PM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    return `${formattedHours} ${period}`;
  };

  const handleBookNowWhatsapp = (yacht) => {
    const startTime = convertMinutesToTime(timeRange[0]);
    const formattedSelectedDate = format(selectedDate, 'dd MMM yyyy');
    const message = `
Hello! I am interested in booking the car%0A%0A
%F0%9F%93%85 Booking Details:%0A%0A
%F0%9F%9B%A5%EF%B8%8F Car Name: ${yacht.title}%0A
%F0%9F%95%91%20 Time:%20${startTime}%0A
%F0%9F%93%85%20 Date:%20${formattedSelectedDate}%0A
%F0%9F%91%AA%20 Seats: %0A

%E2%9C%A8 Looking forward to connecting with you!`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=+919410888861&text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  const handleBookNowTelegram = (yacht) => {
    const startTime = convertMinutesToTime(timeRange[0]);
    const formattedSelectedDate = format(selectedDate, 'dd MMM yyyy');
    const emailSubject = encodeURIComponent(
      `Booking Inquiry for ${yacht.title}`
    );
    const message = `Hello! I am interested in booking the cars%0A%0A
%F0%9F%93%85 Booking Details:%0A%0A
%F0%9F%9B%A5%EF%B8%8F Yacht Name: ${yacht.title} ${yacht.length}%0A
%F0%9F%95%91%20 Time:%20${startTime}%0A
%F0%9F%93%85%20 Date:%20${formattedSelectedDate}%0A
%F0%9F%91%AA%20 No.%20of%20Guests:  %0A

%E2%9C%A8 Looking forward to connecting with you!`;

    const emailRecipient = 'example@example.com'; // Replace with your recipient's email address
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${emailSubject}&body=${message}`;
    window.open(gmailURL, '_blank');
  };

  const handleBookNowPhone = (yacht) => {
    const startTime = convertMinutesToTime(timeRange[0]);
    const formattedSelectedDate = format(selectedDate, 'dd MMM yyyy');
    const message = `Hello! I am interested in booking the cars%0A%0A
%F0%9F%93%85 Booking Details:%0A%0A
%F0%9F%9B%A5%EF%B8%8F Yacht Name: ${yacht.title} ${yacht.length}%0A
%F0%9F%95%91%20 Time:%20${startTime}%0A
%F0%9F%93%85%20 Date:%20${formattedSelectedDate}%0A
%F0%9F%91%AA%20 No.%20of%20Guests:

%E2%9C%A8 Looking forward to connecting with you!`;

    const phoneURL = `sms:+919410888861?body=${encodeURIComponent(message)}`;
    window.open(phoneURL, '_blank');
  };
  const pageData = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCardClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const handleNextYacht = () => {
    const currentIndex = filteredProperties.indexOf(selectedProperty);
    if (currentIndex === -1 || currentIndex === filteredProperties.length - 1) {
      setSelectedProperty(filteredProperties[0]);
    } else {
      setSelectedProperty(filteredProperties[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const generateUniqueRandomNumbers = () => {
      const numbers = {};
      properties.forEach((property) => {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * 100) + 1;
        } while (Object.values(numbers).includes(randomNumber));
        numbers[property.id] = randomNumber;
      });
      return numbers;
    };

    const savedNumbers =
      JSON.parse(localStorage.getItem('randomNumbers')) || {};
    const now = Date.now();
    const oneMinute = 60 * 1000;

    if (
      savedNumbers.timestamp &&
      now - savedNumbers.timestamp < oneMinute &&
      Object.keys(savedNumbers.numbers || {}).length === properties.length
    ) {
      setRandomNumbers(savedNumbers.numbers);
    } else {
      const newNumbers = generateUniqueRandomNumbers();
      setRandomNumbers(newNumbers);
      localStorage.setItem(
        'randomNumbers',
        JSON.stringify({ numbers: newNumbers, timestamp: now })
      );
    }

    const interval = setInterval(() => {
      const updatedNumbers = generateUniqueRandomNumbers();
      setRandomNumbers(updatedNumbers);
      localStorage.setItem(
        'randomNumbers',
        JSON.stringify({ numbers: updatedNumbers, timestamp: Date.now() })
      );
    }, oneMinute);

    return () => clearInterval(interval);
  }, [filteredProperties]);

  return (
    <div className={`custom-ltn__car-dealer-form-area ${customClasses}`}>
      <Container>
        <Dater />
        <div
          className='heading '
          id='cars'
        >
          <h4>
            Browse Cars<span style={{ fontSize: '30px' }}>🚘</span>
          </h4>
          <h3>
            Shortlist your favorite cars or proceed{' '}
            <span> Direct Booking.</span>
          </h3>
        </div>
        <div
          id='yatchList'
          style={{ marginBottom: '40px' }}
        ></div>
        <Row>
          {filteredProperties.length === 0 ? (
            <p>No yacht found for your selected criteria.</p>
          ) : (
            <>
              {pageData?.map((property) => (
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  key={property.id}
                  className='mb-4 yacht-card'
                  id
                >
                  <div
                    className='custom-property-listing-card border-radius h-100 shadow-sm border-size'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleCardClick(property)}
                  >
                    <div className='custom-property-image-gallery yacht-card p-15'>
                      <div className='custom-image-wrapper border-radius overflow-hidden position-relative'>
                        {/*<a href="#" className="custom-favorite-btn"><i className="fa fa-heart">newest</i></a>*/}
                        <div className='newest-label right m-2'>
                          👁️{randomNumbers[property.id]}
                        </div>
                        {property.category === 'PREMIUM' && (
                          <div className='newest-label left m-2'>
                            {property.category}
                          </div>
                        )}

                        <Image
                          src={property.image}
                          className='w-100 custom-rounded-image'
                          width={500}
                          height={200}
                          style={{
                            objectPosition: `${property.objectPosition}`,
                            borderRadius: '15px',
                          }}
                          alt={`Property Image for ${property.title}`}
                        />
                      </div>
                    </div>
                    <div className='custom-property-info yacht-card custom-list-content-padding '>
                      <a
                        href='#'
                        className='custom-property-title'
                      >
                        {property.title} <span>{property.length2}</span>
                      </a>
                      <div className='custom-property-address'>
                        {property.address}
                      </div>
                      <div className='custom-property-features   align-items-center gap-2'>
                        {property.features.map((feature, index) => (
                          <div
                            key={index}
                            className='d-flex align-items-center back-color'
                          >
                            <span className='custom-feature-font'>
                              {feature.label}{' '}
                            </span>
                          </div>
                        ))}
                      </div>
                      {property.feature.map((item, index) => (
                        <div
                          className='custom-feature-font pt-2'
                          key={index}
                        >
                          {item}
                        </div>
                      ))}
                      <ul
                        className='d-flex flex-wrap align-items-center justify-content-between custom-feature-text p-0'
                        style={{ width: '100%' }}
                      >
                        <li className='d-flex align-items-center '>
                          <span>
                            {property.hourlyPrice}
                            <span style={{ fontWeight: '500' }}>/KM</span>
                          </span>
                        </li>
                      </ul>
                      {/*<div className="parent-container">*/}

                      {/*</div>*/}
                    </div>
                    <div className='d-flex-item  social-media width'>
                      <div
                        className='custom-social-media-icon custom-social-media-padding custom-social-media-bg whatsapp-icon icon-size left-border-corner'
                        style={{ backgroundColor: '#67BA65' }}
                        onClick={() => handleBookNowWhatsapp(property)}
                      >
                        <div className=' badge m-2'>
                          <FaWhatsapp size={24} />
                        </div>
                      </div>
                      <div className='custom-social-media-icon custom-social-media-padding custom-social-media-bg-one phone-icon icon-size '>
                        <div
                          className=' badge m-2'
                          onClick={() => handleBookNowPhone(property)}
                        >
                          <FaPhoneAlt size={24} />
                        </div>
                      </div>
                      <div className='custom-social-media-icon custom-social-media-padding custom-social-media-bg-two email-icon icon-size right-border-corner '>
                        <div
                          className=' badge m-2'
                          onClick={() => handleBookNowTelegram(property)}
                        >
                          <FaPaperPlane size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
        {/* Pagination Controls */}
        <Row className='mt-4'></Row>
      </Container>
      {selectedProperty && (
        <div>
          {pageData.map((property) => (
            <Modal
              show
              onHide={handleCloseModal}
              centered
              key={property.id}
            >
              <Modal.Body>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                  style={{ cursor: 'pointer' }}
                  onClick={(event) => {
                    event.preventDefault();
                    handleCloseModal();
                  }}
                  className='pop-close'
                >
                  <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
                </svg>
                <div className='pop-yacht'>
                  <div className='pop-image'>
                    <Swiper
                      key={`modal-swiper-${property.id}`}
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={true}
                      navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                      }}
                      modules={[Navigation]}
                      style={{ width: '522px' }}
                      className='pop-swiper'
                    >
                      {selectedProperty?.images?.map((img, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={img.src}
                            width={522}
                            height={371}
                            style={{
                              objectFit: 'cover',
                              objectPosition: `${selectedProperty.objectPosition}`,
                            }}
                            alt={`Image ${index + 1} of ${
                              selectedProperty.title
                            }`}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className='slider-navi'>
                      <button className={`custom-prev`}>
                        <FaArrowLeft />
                      </button>
                      <button className={`custom-next`}>
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                  <div className='pop-content'>
                    <Modal.Title>
                      {selectedProperty.title}
                      <span>{selectedProperty.length2}</span>
                    </Modal.Title>
                    <p>{selectedProperty.address}</p>
                    <p className='pop-feature pt-20'>
                      <span>
                        <Image
                          src='/img/local.png'
                          width={25}
                          height={25}
                        />
                      </span>
                      <strong>Local Agra</strong> {selectedProperty.length}
                    </p>
                    <p className='pop-feature'>
                      <span>
                        <Image
                          src='/img/seat.png'
                          width={25}
                          height={25}
                        />
                      </span>
                      <strong>Capacity</strong> {selectedProperty.guests}
                    </p>
                    <p className='pop-feature'>
                      <span>
                        <Image
                          src='/img/price.png'
                          width={25}
                          height={25}
                        />
                      </span>
                      <strong>Per KM Price</strong>{' '}
                      {selectedProperty.hourlyPrice}
                    </p>
                    <div className='d-flex gap-4 mt-20 pop-btns'>
                      <Link
                        className='bookWhatsappPop'
                        href='https://wa.me/+919410888861?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20cars.'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Book by Whatsapp <FaWhatsapp />
                      </Link>
                      <a
                        className='nextBtn'
                        rel='noopener noreferrer'
                        onClick={(e) => {
                          handleNextYacht();
                        }}
                      >
                        View Next Cars <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          ))}
        </div>
      )}

      <style jsx>{`
        .heading {
          text-align: center;
          margin-bottom: -20px;
          margin-top: 10px;
        }

        @media (min-width: 320px) and (max-width: 767px) {
          .heading {
            margin-bottom: -30px;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductItem;
