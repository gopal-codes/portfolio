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
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { FlexColumn } from "../components.style/Flex.style";
import profileimage from '../Assets/pic.png'

const HeroSection = () => {

  return (
    <HeroWrapper id="Navbar">
      <HeroLeft>
        <FlexColumn>
          <H1>Hi! I Am</H1>
          <H1 colored >Gopal Raut</H1>
          <H3>
            I am a freelancer Frontend Developer,
            Experienced in web designing and development,Producing
            quality work. And a Person who can help you to change your ideas
            to reality.
          </H3>
          <HeroButton >Hire me</HeroButton>
          <HeroRow>
            <Icons>
              <FacebookRoundedIcon
                style={{ cursor: "pointer", fontSize: "70px" }}
              />
            </Icons>
            <Icons>
            <LinkedInIcon
              style={{ cursor: "pointer", fontSize: "70px" }}
            >
            </LinkedInIcon>
            
            </Icons>
            <Icons>
            <InstagramIcon
              style={{ cursor: "pointer", fontSize: "70px" }}
            />
            </Icons>
          </HeroRow>
        </FlexColumn>
      </HeroLeft>
      <HeroRight>
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
