import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


// import required modules
import {  Pagination, EffectCoverflow} from "swiper";

import { H1 } from "../components.style/SingleUsedcomponent.style";
import {
  ProjectBlurColor,
  ProjectCard,
  ProjectLeft,
  ProjectRight,
  ProjectWrapper,
} from "./Projects.style";
import ecommerce from '../Assets/ecommerce thumbnail.jpg';
import socialmedia from '../Assets/socialmedia thumbnail.jpg';
import Portfolio from '../Assets/portfolio.PNG';
import { Image } from "../components.style/Image.style";

const Projects = () => {
  return (
    <ProjectWrapper id="Project">
      <ProjectLeft>
          <H1>Recent Projects</H1>
          <H1 colored>Portfolio</H1>
          <ProjectBlurColor />
      </ProjectLeft>
      <ProjectRight>

      <Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={"auto"}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: true,
         }}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
            <ProjectCard 
            target="_blank" 
            href="https://ecommercefrontend.onrender.com/" >
              <Image src={ecommerce} /> </ProjectCard>
          </SwiperSlide>
         <SwiperSlide>
            <ProjectCard
            target="_blank" 
            href="https://socialmedia-f0xn.onrender.com/"
            ><Image src={socialmedia} /> </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
            target="_blank"
            href="https://gopalportfolio.netlify.app/"
            ><Image src={Portfolio} /> </ProjectCard>
          </SwiperSlide>

      </Swiper>
      <ProjectBlurColor belowpage />
      </ProjectRight>
    </ProjectWrapper>
  );
};

export default Projects;
