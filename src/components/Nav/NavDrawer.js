import React from 'react';
import Styled from 'styled-components';
import { NavText } from './NavCompoStyles';
import {Link} from 'react-scroll';
import { Button } from "../components.style/Button.style";

const DrawerCompo = Styled.div`
padding-right:10px;
border-right:5px solid white;
position:absolute;
z-index:1;
width:40%;
height:87vh;
background-color:gray;
opacity:1;
padding-top:100px;
display:none;
transform:${({Drawer})=>Drawer?"translateX(0%)":"translateX(-100%)"};
transition: transform 1s ease;
@media only screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    align-items:center;
}
`


const NavDrawer = ({Drawer,setDrawer}) => {
    
   
  return (
   <>
    <DrawerCompo Drawer={Drawer}>
        <Link spy={true} to="Navbar" smooth={true}>
        <NavText onClick={()=>setDrawer(false)} >Home</NavText>
        </Link>
        <Link spy={true} to="Service" smooth={true}>
        <NavText onClick={()=>setDrawer(false)}>Service</NavText>
        </Link>
        <Link spy={true} to="Client" smooth={true}>
        <NavText onClick={()=>setDrawer(false)}>Client</NavText>
        </Link>
        <Link spy={true} to="Project" smooth={true}>
        <NavText onClick={()=>setDrawer(false)}>Project</NavText>
        </Link>
        <Link spy={true} to="Contact" smooth={true}>
        <NavText button onClick={()=>setDrawer(false)}><Button>Contact</Button></NavText>
        </Link>
    </DrawerCompo>
   </>
  )
}

export default NavDrawer