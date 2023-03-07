import React  from 'react';
import {
  H1,
  H3,
  Icons,
} from "../components.style/SingleUsedcomponent.style";
import HeroSectionCard from "./HeroSectionCard";
import { HeroBlurBottom, HeroBlurTop, HeroButton, HeroColoredShape, HeroLeft, HeroProfileImage, HeroRight, HeroRow, HeroShapeContainer, HeroWrapper } from "./HeroSectionStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FlexColumn } from "../components.style/Flex.style";
import profileimage from '../Assets/pic.png'

import { leftAnimateObject, rightAnimateObject} from "../components.style/ReactSpring";
import {animated, useSpring} from "react-spring";
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {

  // this is for animation.
  const [ref, inView] = useInView({ threshold: 0.1 });
  // here threshold define part of screen component has occupied
  const animateLeft= useSpring(leftAnimateObject(inView))
  const animateRight = useSpring(rightAnimateObject(inView))
  // upto here.

  return (
    <HeroWrapper id="Navbar" ref={ref}>
      <HeroLeft as={animated.div} style={animateLeft}>
        <FlexColumn>
          <H1>Hi! I Am</H1>
          <H1 colored >Gopal Raut</H1>
          <H3>
            I am a Frontend Developer,
            Experienced in web designing and development,Producing
            quality work. And a Person who can help you to change your ideas
            to reality.
          </H3>
          <HeroButton >Hire me</HeroButton>
          <HeroRow>
            <Icons
            target="_blank" 
            href="https://github.com/gopal-codes"
            >
              <GitHubIcon
                style={{ cursor: "pointer", fontSize: "70px" }}
              />
            </Icons>
            <Icons 
            target="_blank" 
            href="https://www.linkedin.com/in/gopal-raut-057a83225" >
            <LinkedInIcon 
              style={{ cursor: "pointer", fontSize: "70px" }}
            >
            </LinkedInIcon>
            </Icons>
            <Icons
            target="_blank" 
            href="https://www.instagram.com/gopalraut123/">
            <InstagramIcon
              style={{ cursor: "pointer", fontSize: "70px" }}
            />
            </Icons>
          </HeroRow>
        </FlexColumn>
      </HeroLeft>
      <HeroRight as={animated.div} style={animateRight}>
        <HeroSectionCard />
        <HeroBlurTop />
        <HeroShapeContainer>
          <HeroProfileImage src={profileimage} />
          {/* <HeroColoredShape backstyle  /> */}
          <HeroColoredShape />
        </HeroShapeContainer>
        <HeroBlurBottom />
      </HeroRight>
    </HeroWrapper>
  );
};

export default HeroSection;
