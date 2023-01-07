import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  ContactLeft,
  ContactRight,
  ContactWrapper,
  Input,
  Textarea,
} from "./Contact.style";
import { H1 } from "../components.style/SingleUsedcomponent.style";
import { FlexColumn } from "../components.style/Flex.style";
import { HeroButton } from "../HeroSection/HeroSectionStyles";
import { errortoast, successtoast } from "../Toast";


const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if(user.username||user.message||user.email!==""){
      emailjs.sendForm('service_a9swp1g', 'template_kk5i53w', form.current, 'WShMwHVU4X2yNvyvj')
      .then((result) => {
          console.log(result.text);
          successtoast("Email sent.")
      }, (error) => {
          console.log(error.text);
          errortoast("check your internet")
      });
    }else{

    }
  };

  return (
    <>
      <ContactWrapper id="Contact">
        <ContactLeft>
          <FlexColumn>
            <H1>Get in Touch</H1>
            <H1 colored>Contact me</H1>
          </FlexColumn>
        </ContactLeft>
        <ContactRight>
          <FlexColumn>
            <form style={{display:"flex",flexDirection:"column"}} ref={form} onSubmit={sendEmail}>
            <Input
              type="text"
              name="username"
              value={user.username}
              placeholder="Name"
              onChange={handlechange}
            />
            <Input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handlechange}
            />
            <Textarea
              type="text"
              name="message"
              value={user.message}
              rows="5"
              placeholder="message"
              onChange={handlechange}
            />
            <HeroButton type="submit" >send</HeroButton>
            </form>
          </FlexColumn>
        </ContactRight>
      </ContactWrapper>
    </>
  );
};

export default Contact;
