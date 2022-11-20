import styled from 'styled-components';
import { FlexColumn } from '../components.style/Flex.style';
import { H1, H3 } from '../components.style/SingleUsedcomponent.style';
import { Left, Right, Wrapper } from '../components.style/Wrapper.style';

export const ServiceWrapper= styled(Wrapper)`
    margin-top:100px;
    @media only screen and (max-width: 768px) {
        flex-direction:column; 
    }
`
export const ServiceLeft = styled(Left)`
    height:80vh;
    align-items:start;
    position:relative;
    @media only screen and (max-width: 768px) {
        position:static;  
    }
`
export const ServiceRight = styled(Right)`
    height:80vh;
    position:relative;
    @media only screen and (max-width: 768px) {
        position:static;
        flex-direction:column; 
        gap:1rem; 
    }
`
export const ServiceH1 = styled(H1)`
@media only screen and (max-width: 768px) {
    text-align:center;
}
`
export const ServiceFlexColumn = styled(FlexColumn)`
    align-items:${({left})=>left?"":"center"};
`
export const ServiceCard = styled(Wrapper)`
    position:absolute;
    display:flex;
    justify-content:center;
    width:220px;
    border:${({theme})=>`5px solid ${theme.primaryColor}`};
    border-radius:15%;
    padding:25px;
    text-align:center;
    bottom:${({node})=>node?'30px':""};
    top:${({customer})=>customer?'-40px':""};
    left:${({node})=>node?"30%":""};
    right:${({customer})=>customer?"20%":""};
    @media only screen and (max-width: 768px) {
        position:static;  
    }
`
export const LeftCard = styled(ServiceCard)`
    bottom:-10%;
    right:-27%;
    @media only screen and (max-width: 768px) {
        margin-top:40px;  
        margin-bottom:1rem;
    }
`
export const CardButton =styled.button`
    width:60%;
    border-radius:15%;
    color:black;
    font-size:15px;
    padding:5px;
`
export const ServiceH3 = styled(H3)`
    margin-top:${({card})=>card?"2px":"0px"};
    color:${({desc,card,theme})=>desc||card?"gray":theme.textcolor};
    @media only screen and (max-width: 768px) {
        text-align:center;
    }
`