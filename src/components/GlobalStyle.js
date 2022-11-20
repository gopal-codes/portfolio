import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    overflow-x:hidden;
    margin: 0;
    padding-left:5%;
    padding-right:5%;
    @media only screen and (max-width: 900px) {
      padding:0;
  }
    background: ${({theme})=>theme.secondaryColor};
  }
  
  .swiper {
    width: 100%;
    height: 300px;
  }
  
  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  .swiper-slide {
    width: 400px;
  }

  .swiper-pagination-bullet{
    background:${({theme})=>theme.textcolor};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({theme})=>theme.primaryColor} !important;
}


`
export default GlobalStyle;