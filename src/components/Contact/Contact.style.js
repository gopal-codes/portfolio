import styled from 'styled-components';
import {Wrapper ,Left,Right} from "../components.style/Wrapper.style"

export const ContactWrapper =styled(Wrapper)`
margin-top:100px;
@media only screen and (max-width: 768px) {
    flex-direction:column;   
}
`
export const ContactLeft =styled(Left)`
    justify-content:flex-start;
    align-items:start;
    @media only screen and (max-width: 768px) {
        flex-direction:column;
        align-items:center; 
    }
`
export const ContactRight =styled(Right)`
    justify-content:center;
    @media only screen and (max-width: 768px) {
        justify-content:center; 
        margin-top:40px; 
        margin-bottom:40px; 
    }
`

export const Input = styled.input`
    width:400px;
    height:30px;
    padding:10px;
    font-size:18px;
    margin-bottom:40px;
    background-color:white;
    color:black;
    border:3px solid ${({theme})=>theme.primaryColor};
    border-radius:10%;
    @media only screen and (max-width: 768px) {
        width:320px;   
    }
`
export const Textarea =styled.textarea`
width:400px;
padding:10px;
margin-bottom:40px;
font-size:18px;
background-color:white;
color:black;
border:3px solid ${({theme})=>theme.primaryColor};
border-radius:10%;
@media only screen and (max-width: 768px) {
    width:320px;   
}
`