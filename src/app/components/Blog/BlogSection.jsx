import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import Image from 'next/image';
import './BlogSection.css';
import { useState } from 'react';

const BlogSection = ({ sectionTitle, sectionSubtitle, blogPosts = [] }) => {
  if (!blogPosts || blogPosts.length === 0) return null; // Prevent rendering if no data

  return (
    <section
      className='blog-section'
      role='region'
      aria-labelledby='blog-section-title'
    >
      <div className='header-text'>
        <h4>Our Customers' Experiences</h4>
        <h3>
          We Ensure the Best <span>Customer Experience</span>
        </h3>
      </div>
      <div className='blog-header'>
        <h2
          id='blog-section-title'
          className='blog-title'
        >
          {sectionTitle}
        </h2>
        <p className='blog-subtitle'>{sectionSubtitle}</p>
      </div>

      {/* Swiper Slider for Blog Posts */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className='blog-slider'
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide
            key={index}
            className='swiper-slide'
          >
            <BlogCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const BlogCard = ({ post }) => {
  const [hovered, setHovered] = useState(false);
  const imageToShow =
    hovered && post.imageSrc[1] ? post.imageSrc[1] : post.imageSrc[0];

  return (
    <div
      className='blog-card'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageToShow}
        alt={post.title}
        className='blog-image'
        loading='lazy'
        width={300} // Set appropriate width
        height={200} // Set appropriate height
        style={{ objectFit: 'cover' }}
      />
      <div className='blog-overlay'>
        <div className='title-container'>
          <h3 className='blog-post-title'>{post.titles}</h3>
          <span className='star-rating'>⭐⭐⭐⭐⭐</span> {/* 5-Star Rating */}
        </div>
        <h6 className='blog-post-subtitle'>{post.title}</h6>
      </div>
    </div>
  );
};

export default BlogSection;
