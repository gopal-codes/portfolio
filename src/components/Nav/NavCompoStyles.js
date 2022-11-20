import styled from 'styled-components'
import { Icons } from '../components.style/SingleUsedcomponent.style'
import { Left, Right } from '../components.style/Wrapper.style'

export const NavLeft = styled(Left)`
    justify-content:start;
    position:relative;
    z-index:2;
`

export const NavRight = styled(Right)`
    justify-content:end;
    position:relative;
    @media only screen and (max-width: 768px) {
        display:none;
    }
`
export const Logo= styled.h2`
    font-size:40px;
    font-family:cursive;
    margin-right:5px;
    color:${({theme})=>theme.primaryColor}
`
export const NavText = styled.h2`
    font-weight:400;
    font-family:mono-space;
    margin-right:40px;
    border-bottom:2px solid transparent;
    color:${props=>props.theme.textcolor};
    &:active{
        transform:scale(0.95);
    }
    &:hover{
        color:${props=>props.theme.primaryColor};
        border-bottom:${({button,theme})=>button?"":`2px solid ${theme.primaryColor}`} ;
    }
    
`
    export const NavIcons = styled(Icons)`
    display:none;
    position:absolute;
    top:40px;
    right:10px;
    @media only screen and (max-width: 768px) {
        display:flex;
        z-index:2;
    }
    `