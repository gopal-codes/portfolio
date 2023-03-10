import { Public, YouTube } from '@mui/icons-material'
import PinterestIcon from '@mui/icons-material/Pinterest';
import React from 'react'
import { FlexColumn } from '../components.style/Flex.style'
import { H1, H3 } from '../components.style/SingleUsedcomponent.style'
import { HeroButton } from '../HeroSection/HeroSectionStyles'
import {BrandWrapper ,BrandLeft, BrandRight, BrandCircle, SmallCircle, IconBorder, } from './BrandAndCompany.style'
import { leftAnimateObject, rightAnimateObject} from "../components.style/ReactSpring";
import {animated, useSpring} from "react-spring";
import { useInView } from 'react-intersection-observer';

const BrandAndCompany = () => {

  const [ref, inView] = useInView({ threshold: 0.01 });
  // here threshold define part of screen component has occupied
  const animateLeft= useSpring(leftAnimateObject(inView))
  const animateRight = useSpring(rightAnimateObject(inView))

  return (
    <BrandWrapper ref={ref} id="Client">
        <BrandLeft  as={animated.div} style={animateLeft}>
        <FlexColumn>
          <H1>Works for All these</H1>
          <H1 colored >Brands & Clients</H1>
          <H3>
            I am a freelancer Frontend Developer,
            Experienced in web designing and development,Producing
            quality work. And a Person who can help you to change your ideas
            to reality.
          </H3>
          <HeroButton>Hire me</HeroButton>
        </FlexColumn>
        </BrandLeft>
        <BrandRight style={animateRight} as={animated.div}>
            <BrandCircle >
              <SmallCircle first />
              <SmallCircle second />
             
                <IconBorder first>
                  <YouTube style={{fontSize:"40px",border:"20px solid white",borderRadius:"50%"}} />
                </IconBorder>
              
         
                <IconBorder second>
                  <PinterestIcon style={{fontSize:"40px",border:"20px solid white",borderRadius:"50%"}}/>
                </IconBorder>
              
                <IconBorder third>
                  <Public style={{fontSize:"40px",border:"20px solid white",borderRadius:"50%"}}/>
                </IconBorder>
  
            </BrandCircle> 
        </BrandRight>
    </BrandWrapper>
  )
}

export default BrandAndCompany