import React from "react";
import {
    Experiencecolumn,
  ExperienceWrapper,
  IconCircle,
  IconText,
  SecondText,
} from "./Experience.style";
import { Flexrow } from "../components.style/Flex.style";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <Flexrow>
        <IconCircle>
          <IconText >2+</IconText>
          <Experiencecolumn >
            <SecondText >years</SecondText>
            <SecondText>Experience</SecondText>
          </Experiencecolumn>
        </IconCircle>
        <IconCircle>
          <IconText>9+</IconText>
          <Experiencecolumn>
            <SecondText>completed</SecondText>
            <SecondText>Projects</SecondText>
          </Experiencecolumn>
        </IconCircle>
        <IconCircle>
          <IconText >0+</IconText>
          <Experiencecolumn>
            <SecondText>Company</SecondText>
            <SecondText>Work</SecondText>
          </Experiencecolumn>
        </IconCircle>
      </Flexrow>
    </ExperienceWrapper>
  );
};

export default Experience;
