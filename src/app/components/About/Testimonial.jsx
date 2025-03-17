import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css'; // Import CSS file

function Testimonial() {
  const carouselVideos = ['/img/reviews.mp4', '/img/review.mp4'];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <section
      className='testimonial-section'
      id={'about'}
    >
      <div className='testimonial-container'>
        {/* Left Column: Testimonial Text and Profile */}
        <div className='testimonial-left'>
          <div className='testimonial-text header-text'>
            <h3 className='testimonial-heading '>
              What people are saying <span>About Us...</span>
            </h3>
            <div className='testimonial-profile'>
              <img
                loading='lazy'
                src='/img/test6.jpg'
                alt='Josh Smith'
                className='profile-image'
              />
              <div className='profile-details'>
                <div className='profile-name'>Hritik Kushwah</div>
                <div className='profile-role'>GangaRam Tour & Travels</div>
              </div>
            </div>
            <blockquote className='testimonial-quote'>
              "Welcome to GangaRam Tour & Travels, we redefine car rentals with
              a seamless, affordable, and premium experience. Whether you're
              exploring new destinations, heading to important business meeting,
              or simply need a reliable ride for your daily commute, we’ve got
              the perfect car for you."
            </blockquote>
          </div>
        </div>

        {/* Right Column: Video Carousel */}
        <div className='testimonial-right'>
          <div className='carousel-container'>
            <Slider {...sliderSettings}>
              {carouselVideos.map((video, index) => (
                <div
                  key={index}
                  className='carousel-video'
                >
                  <video
                    src={video}
                    controls
                    muted
                    loop
                    playsInline
                    className='video-element'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
