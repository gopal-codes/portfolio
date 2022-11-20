import styled from 'styled-components';

export const FotterWrapper = styled.div`
padding-top:20px;
margin-top:100px;
background:${({theme})=>theme.primaryColor};
    height:100px;
    width:calc(100%-40px);
    border-top-right-radius:50%;
    text-align:center;
`

export const FotterText = styled.h3`
    color:gray;
`