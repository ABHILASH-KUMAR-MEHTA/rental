'use client';
import Image from 'next/image';
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
import One from './assets/test1.jpg';
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
        // sectionTitle='Caring is the new marketing'
        // sectionSubtitle="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
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
        ]}
      />
      <Testimonial />
      <Footers />
    </>
  );
}
