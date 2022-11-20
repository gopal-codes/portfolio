import styled from 'styled-components'
import { Left, Right, Wrapper } from '../components.style/Wrapper.style'

export const BrandWrapper = styled(Wrapper)`
@media only screen and (max-width: 768px) {
    flex-direction:column;
}
`
export const BrandLeft = styled(Left)`
    justify-content:center;
    position:relative;
    @media only screen and (max-width: 768px) {
        text-align:center;  
        padding-left:0; 
    }
`

export const BrandRight = styled(Right)`
    justify-content:center;
    @media only screen and (max-width: 768px) {
        padding-top:70px;
        padding-bottom:70px; 
        padding-right:20px;
    }
`

export const BrandCircle = styled.div`
    width:250px;
    height:250px;
    border-radius:50%;
    box-shadow: 5px 5px 150px 10px grey;
    background-color:white;
    position:relative;
`
export const SmallCircle = styled.div`
    position:absolute;
    z-index:-1;
    width:125px;
    height:125px;
    border-radius:50%;
    background-color:${({first,theme})=>first?"blue":theme.primaryColor};
    right:0%;
    right:${({first})=>first?"-15%":"-15%"};
    bottom:${({second})=>second?"5%":""};
`
export const IconBorder = styled.div`
box-shadow: 2px 1px 50px 1px grey;
    background:white;
    border-radius:50%;
    color:${({theme})=>theme.primaryColor};
    position:absolute;
    left:${({first})=>first?"90%":"-15%"};
    bottom:${({first})=>first?"35%":""};
    top:${({third})=>third?"65%":" "};
`