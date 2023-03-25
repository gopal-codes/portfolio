import styled from 'styled-components'
import { Button } from '../components.style/Button.style'
import { Flexrow } from '../components.style/Flex.style'
import { Image } from '../components.style/Image.style'
import { Blureffect } from '../components.style/SingleUsedcomponent.style'
import { Left, Right, Wrapper } from '../components.style/Wrapper.style'

export const HeroWrapper = styled(Wrapper)`
@media only screen and (max-width: 768px) {
    flex-direction:column;
}
`
export const HeroLeft = styled(Left)`
    position:relative;
    @media only screen and (max-width: 768px) {
        text-align:center;   
    }
`

export const HeroRight = styled(Right)`
    justify-content:end;
    position:relative;
    @media only screen and (max-width: 768px) {
          margin-top:150px;
          display:flex;
          justify-content:center;
    }
`

export const CanvaContainer = styled.div`
    position:absolute;
    top:${({second})=>second?"15%":"5%"};
    right:${({second})=>second?"-15%":"-25%"};
    height:80%;
    width:80%;
    @media only screen and (max-width: 768px) {
        height:100%;
        width:100%;
        top:${({second})=>second?"30%":"15%"};
        right:${({second})=>second?"4%":"-4%"};
       }
`
export const BoxCanva = styled.div`
       position:absolute;
       right:0;
       left:0;
       bottom:10%;
       @media only screen and (max-width: 769px){
        bottom:-25px;    
    };
`
export const HeroShapeContainer= styled.div`
        display:flex;
        justify-content:end;
        align-items:center;
    `
    export const HeroColoredShape = styled.div`
        z-index:${({backstyle})=>backstyle?"1":""};
        opacity:0.7;
        width:${({backstyle})=>backstyle?"300px":"380px"};
        height:${({backstyle})=>backstyle?"450px":"400px"};
        position:${({backstyle})=>backstyle?"absolute":""};
        border-radius:${({backstyle})=>backstyle?"96% 25% 86% 15% / 83% 67% 37% 21%":"66% 38% 86% 0% / 100% 66% 37% 0% "};
        background-color:${({backstyle,theme})=>backstyle?theme.primaryColor:"#242d49"};
        background-image: linear-gradient(#242d49, #61c2ec);
        @media only screen and (max-width: 950px) and (min-width: 768px){
            width:${({backstyle})=>backstyle?"250px":"300px"};    
        };
        @media only screen and (max-width: 768px) {
            width:${({backstyle})=>backstyle?"0px":"350px"};
        }
    `

    export const HeroBlurTop = styled(Blureffect)`
        width:14rem;
        height:5rem;
        opacity:0.9;
        position:absolute;
        bottom:18%;
        right:2.8%;
        filter:blur(10px);
        z-index:3;
        background-color:${({theme})=>theme && theme.primaryColor};
        @media only screen and (max-width: 768px) {
            right:23%;
            bottom:-12%;
        }
    `
    export const HeroBlurBottom = styled(Blureffect)`
        position:absolute;
        bottom:-10%;
        left:-30%;
        background-color:#c1f5ff;
    `
    export const HeroButton = styled(Button)`
        width:150px;
        @media only screen and (max-width: 768px) {
            width:200px;
        }
    `

    export const HeroRow = styled(Flexrow)`
        display:flex;
        justify-content:start;
         margin-top:70px;
         padding:10px;
         @media only screen and (max-width: 768px) {
             margin-top:40px;
             gap:1.5rem;
             justify-content:center;
            }
    `

    export const HeroProfileImage = styled(Image)`
            position:relative;
            margin-top:-150px;
            z-index:2;
            height:400px;
            width:250px;
            display:flex;
            justify-content:end;
            align-items:center;
            @media only screen and (max-width: 768px) {
                display:flex;
                justify-content:center;
                margin-top:-50px;
          }
    ` 