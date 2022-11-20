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
import gopal from '../Assets/Gopal.png';
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
            <ProjectCard><Image src={gopal} /> </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard><Image src={gopal} /> </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard><Image src={gopal} /> </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard><Image src={gopal} /> </ProjectCard>
          </SwiperSlide>

      </Swiper>
      <ProjectBlurColor belowpage />
      </ProjectRight>
    </ProjectWrapper>
  );
};

export default Projects;
