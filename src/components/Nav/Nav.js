import React, { useState } from "react";
import { Icons } from "../components.style/SingleUsedcomponent.style";
import {Wrapper} from "../components.style/Wrapper.style";
import { Logo, NavIcons, NavLeft, NavRight,NavText, Section } from "./NavCompoStyles";
import { Button } from "../components.style/Button.style";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Dehaze } from "@mui/icons-material";
import {Link} from 'react-scroll';
import NavDrawer from "./NavDrawer";

const Nav = ({setTheme}) => {
  
  const [btnswitch, setbtnswitch] = useState(true);
  const handleSwitch = () => {
    setTheme(btnswitch)
    setbtnswitch(!btnswitch);
  };

  const [Drawer ,setDrawer]= useState(false);
  const [showScrollUp,setshowScrollUp] = useState(false);
  const [lastscroll,setlastscroll]= useState(0);

  // this code handles the nav bar position while scrolling.
  window.addEventListener("scroll",()=>{
    var scrollTop = window.scrollY ;
    if(scrollTop > lastscroll){
      setshowScrollUp(false);}
    else{setshowScrollUp(true)}
    setlastscroll(scrollTop);
  })

  return (
    <Section className="section" showScrollUp={showScrollUp} >
    <NavDrawer Drawer={Drawer} setDrawer={setDrawer} />
    <Wrapper>
      <NavLeft>
        <Logo >Gopal</Logo>
        <div onClick={handleSwitch}>
          {btnswitch ? (
            <Icons style={{ display: "flex", alignItems: "center",position:"relative" }}>
              <ToggleOffIcon style={{ fontSize: "60px"}} />
              <Brightness7Icon style={{ fontSize: "20px", color:"white",position:"absolute",left:'50%' }} />
            </Icons>
          ) : (
            <Icons style={{ display: "flex", alignItems: "center",position:"relative"}}>
              <ToggleOnIcon style={{ fontSize: "60px"}} />
              <NightlightRoundIcon style={{ fontSize: "20px", color: "white",position:"absolute",left:'15%' }} />
            </Icons>
          )}
        </div>
      </NavLeft>
        <NavRight>
        <Link spy={true} to="Navbar" smooth={true}>
        <NavText >Home</NavText>
        </Link>
        <Link spy={true} to="Service" smooth={true}>
        <NavText>Service</NavText>
        </Link>
        <Link spy={true} to="Client" smooth={true}>
        <NavText>Client</NavText>
        </Link>
        <Link spy={true} to="Project" smooth={true}>
        <NavText>Project</NavText>
        </Link>
        <Link spy={true} to="Contact" smooth={true}>
        <NavText button><Button>Contact</Button></NavText>
        </Link>
      </NavRight> 
      <NavIcons><Dehaze onClick={()=>setDrawer(!Drawer)} style={{fontSize:"40px"}} /> </NavIcons>
    </Wrapper>
    </Section>
  );
};

export default Nav;
