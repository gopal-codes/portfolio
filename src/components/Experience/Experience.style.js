import styled from 'styled-components';
import { FlexColumn } from '../components.style/Flex.style';
import { Wrapper } from '../components.style/Wrapper.style';

export const ExperienceWrapper = styled(Wrapper)`
    padding :150px;
    justify-content:center;
`
export const IconCircle = styled.div`
    height:70px;
    width:70px;
    background-color:white;
    border-radius:50%;
    position:relative;
    border-bottom: 5px solid ${({theme})=>theme.textcolor};
    border-top:5px solid ${({theme})=>theme.textcolor} ;
    border-right:5px solid ${({theme})=>theme.primaryColor};
    border-left:5px solid ${({theme})=>theme.primaryColor};
`

export const IconText = styled.h1`
    color:${({theme})=>theme.primaryColor};
    position:absolute;
    top:-15%;
    left:20%;
`
export const Experiencecolumn =styled(FlexColumn)`
    position:absolute;
    top:70px;
    
`
export const SecondText =styled.h4`
    color:${({theme})=>theme.textcolor};
    text-align:center;
    margin:5px 0;
`