import React from 'react'
import styled from 'styled-components';
import { H3, Icons } from '../components.style/SingleUsedcomponent.style';
import HexagonIcon from '@mui/icons-material/Hexagon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { Flexrow } from '../components.style/Flex.style';

const CardFlexRow = styled(Flexrow)`
    background:white;
    padding:10px;
    margin-top:80px;
    border-radius:15%;
    position:absolute;
    top:-30px;
    left:-15px;
    transform:rotate(18deg);
    @media only screen and (max-width: 1050px) {
      display:none;  
  }
`

const HeroSectionCard = () => {
  return (
    <>  
        <CheckroomIcon style={{fontSize:"60px",position:"absolute",transform:"rotate(20deg)",top:"1px",left:"45px",color:"white"}} />
        <CardFlexRow >
            <Icons>
            <HexagonIcon style={{fontSize:"50px",position:"relative"}} />
            </Icons>
            <AcUnitIcon style={{color:"white",fontSize:"25px",position:"absolute",left:"10%"}} />
            <H3>Web Developer</H3>
        </CardFlexRow>
    </>
  )
}

export default HeroSectionCard