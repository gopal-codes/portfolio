import React from "react";
import { Icons } from "../components.style/SingleUsedcomponent.style";
import {
  CardButton,
  LeftCard,
  ServiceCard,
  ServiceFlexColumn,
  ServiceH1,
  ServiceH3,
  ServiceLeft,
  ServiceRight,
  ServiceWrapper,
} from "./Services.style";
import CelebrationIcon from "@mui/icons-material/Celebration";
import BugReportIcon from "@mui/icons-material/BugReport";
import CableIcon from "@mui/icons-material/Cable";
import { HeroButton } from "../HeroSection/HeroSectionStyles";
import cv from '../Assets/Gopal_CV.jpg';

const Services = () => {  
  return (
    <ServiceWrapper id="Service">
      <ServiceLeft>
        <ServiceFlexColumn left >
          <ServiceH1 >My Awesome</ServiceH1>
          <ServiceH1 colored>Service</ServiceH1>
          <ServiceH3 desc>
            I can help with your website developent and maintance using most
            popular framework(react js) in market. And node js will be used for
            Backend.
          </ServiceH3>
          <HeroButton><a style={{textDecoration:"none",color:"inherit"}} href={cv} download="GOPAL_CV" >Download CV</a></HeroButton>
          <LeftCard bug>
            <ServiceFlexColumn>
              <Icons>
                <BugReportIcon style={{ fontSize: "45px" }} />
              </Icons>
              <ServiceH3 >Bug Free Code</ServiceH3>
              <ServiceH3 card>
                Using latest es6/es7 javascript And Express supports backend
              </ServiceH3>
              <CardButton>Learn More</CardButton>
            </ServiceFlexColumn>
          </LeftCard>
        </ServiceFlexColumn>
      </ServiceLeft>
      <ServiceRight>
        <ServiceCard node>
          <ServiceFlexColumn>
            <Icons>
              <CableIcon style={{ fontSize: "45px" }} />
            </Icons>
            <ServiceH3 >Nodejs Connect</ServiceH3>
            <ServiceH3 card>
              Power of Node js supports backend using Express Framework
            </ServiceH3>
            <CardButton>Learn More</CardButton>
          </ServiceFlexColumn>
        </ServiceCard>
        <ServiceCard customer>
          <ServiceFlexColumn>
            <Icons>
              <CelebrationIcon style={{ fontSize: "45px" }} />
            </Icons>
            <ServiceH3>Happy Customer</ServiceH3>
            <ServiceH3 card>
              Free Unlimited Customer support For one year. And Help to boost
              bussiness{" "}
            </ServiceH3>
            <CardButton>Learn More</CardButton>
          </ServiceFlexColumn>
        </ServiceCard>
      </ServiceRight>
    </ServiceWrapper>
  );
};

export default Services;
