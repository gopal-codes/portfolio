import React, { Suspense }  from 'react';
import {
  H1,
  H3,
  Icons,
} from "../components.style/SingleUsedcomponent.style";
import HeroSectionCard from "./HeroSectionCard";
import { BoxCanva, CanvaContainer, HeroBlurBottom, HeroBlurTop, HeroButton, HeroLeft, HeroProfileImage, HeroRight, HeroRow, HeroShapeContainer, HeroWrapper } from "./HeroSectionStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FlexColumn } from "../components.style/Flex.style";
import profileimage from '../Assets/pic.png'

import { leftAnimateObject} from "../components.style/ReactSpring";
import {animated, useSpring} from "react-spring";
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import {ProfileBackgroundAnimation,BoxAnimation} from '../3dAnimationElement/ProfileBackgroundAnimation';
import { OrbitControls } from '@react-three/drei';

const HeroSection = () => {

  // this is for animation.
  const [ref, inView] = useInView({ threshold: 0.01 });
  // here threshold define part of screen component has occupied
  const animateLeft= useSpring(leftAnimateObject(inView))
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

      <BoxCanva>
        <Canvas >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 30, 10]} />
          <Suspense fallback={null}>
            <BoxAnimation enableZoom="false" />
          </Suspense>
        </Canvas>
      </BoxCanva>

      <HeroRight>

      {/* Canva for animation */}
      <CanvaContainer>
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight position={[10, 15, 10]} />
                <Suspense fallback={null}>
                  <ProfileBackgroundAnimation />
                </Suspense>
              </Canvas>
        </CanvaContainer>

        <HeroSectionCard />
        <HeroBlurTop />
        <HeroShapeContainer>
          <HeroProfileImage src={profileimage} />
          {/* <HeroColoredShape backstyle  /> */}
          {/* <HeroColoredShape /> */}

          {/* Canva for animation */}
        <CanvaContainer second>
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight position={[10, 15, 10]} />
                <Suspense fallback={null}>
                  <ProfileBackgroundAnimation second={true} />
                </Suspense>
              </Canvas>
        </CanvaContainer>

        </HeroShapeContainer>
        <HeroBlurBottom />
      </HeroRight>
    </HeroWrapper>
  );
};

export default HeroSection;
