'use client';
import { Navbar } from './components/NavBar/NavBar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Working } from './components/Working/Working';
import { Services } from './components/Services/Services';
import { Download } from './components/Download/Download';
import BlogSection from './components/Blog/BlogSection';
import Testimonial from './components/About/Testimonial';
import HomeVersionThree from './pages';
import './assets/sass/style.scss';
import './assets/responsive.css';
import Footers from './components/footers/Footers';
import { CarBrands } from './components/CarBrands/CarBrands';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Working />
      <HomeVersionThree />
      <Services />
      <CarBrands />
      <Download />
      <BlogSection
        blogPosts={[
          {
            imageSrc: ['/img/test1.jpg', '/img/test4.jpg'],
            titles: 'Avtansh Chahar (Influencer)',
            title:
              ' "I had an amazing experience with Gangaram Tour & Travels. I would highly recommend them to anyone looking for a hassle-free and memorable trip." ',
          },
          {
            imageSrc: ['/img/test2.jpg', '/img/test5.jpg'],
            titles: 'Bindas Kavya (Youtuber)',
            title:
              ' "The car was spotless, well-maintained, and very comfortable. It made my journey to the airport stress-free and pleasant." ',
          },
          {
            imageSrc: ['/img/test3.jpg'],
            titles: 'MiguelDias (Singer)',
            title:
              ' "The car was extremely comfortable and spacious, which made our long journey between Agra, Delhi, and Jaipur enjoyable." ',
          },
          {
            imageSrc: ['/img/test7.jpg'],
            titles: 'Laxman Singh Dhoni',
            title:
              ' "Gangaram Tour And Travels ensured a stress-free airport transfer. The cab arrived promptly, the journey was comfortable, and the service was excellent. Highly recommended!" " ',
          },
          {
            imageSrc: ['/img/test8.jpg'],
            titles: 'Abhishek Parasar',
            title:
              ' "I had a fantastic sightseeing experience with Gangaram Tour And Travels in Agra. The taxi was punctual, making the trip smooth and hassle-free. Highly recommend for a reliable travel service!" ',
          },
          {
            imageSrc: ['/img/test9.jpg'],
            titles: 'Marci fonseca',
            title:
              ' "On my way to the Taj Mahal, I got stuck in traffic for over an hour searching for a cab. I decided to rent a car and found Gangaram Tour and Travels Online. Their pricing was the best, and the service was seamless. It made my journey so much easier!" ',
          },
        ]}
      />
      <Testimonial />
      <Footers />
    </>
  );
}
