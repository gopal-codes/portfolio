import styled from 'styled-components';

export const FotterWrapper = styled.div`
padding-top:20px;
padding-bottom:10px;
margin-top:100px;
background:${({theme})=>theme.primaryColor};
    width:calc(100%-40px);
    border-top-right-radius:50%;
    border-top-left-radius:15%;
    text-align:center;
`

export const FotterText = styled.h4`
    color:white;
    margin:5px
`