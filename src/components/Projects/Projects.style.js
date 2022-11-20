import styled from 'styled-components';
import {Blureffect, Card} from "../components.style/SingleUsedcomponent.style"
import {Right, Left, Wrapper } from '../components.style/Wrapper.style';

export const ProjectWrapper = styled(Wrapper)`
    margin-top:50px;
    margin-bottom:50px;
    flex-direction:column;
`
export const ProjectLeft =styled(Left)`
    position:relative;
    text-align:center;
    justify-content:center;
    flex-direction:column;
    margin:40px 0;
`
export const ProjectRight= styled(Right)`
    
    justify-content:center;
    align-items:center;
    overflow-x:auto;
    &::-webkit-scrollbar {
        height: 0px;
    };
    @media only screen and (max-width: 768px) {
        flex-direction:column;   
    }
`;
export const ProjectCard =styled(Card)`
    height:220px;
    width:400px;
    overflow:hidden;
    background-color:white;
`
export const ProjectBlurColor = styled(Blureffect) `
    position:absolute;
    width:200px;
    background-color:#edd0ff;
    top:${({belowpage})=>belowpage?"":"-200px"};
    left:${({belowpage})=>belowpage?"30px":""};
    right:30px;
`