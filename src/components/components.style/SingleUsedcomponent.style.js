import styled from 'styled-components';

    export const H1 = styled.h1`
        margin:0;
        color:${({colored,theme})=>colored?theme.primaryColor:theme.textcolor};
        font-size:70px;
        @media only screen and (max-width: 1050px) {
            font-size:55px;
        }
    `
    export const H3 =styled.h3`
        color:gray;
        @media only screen and (max-width: 768px){
            width:90%;    
        }
    `

    export const Blureffect = styled.div`
        width:22rem;
        height:14rem;
        z-index:-7;
        background:${({backcolor})=>backcolor};
        border-radius:50%;
        filter:blur(36px);
    `

    export const Icons = styled.a`
        & > *{
            color:${props=>props.theme.primaryColor};
        }
    `

    export const Card = styled.a`
    cursor:pointer;
    border-radius:15%;
    border-right:3px solid skyblue;
    border-bottom:3px solid skyblue;
    `
