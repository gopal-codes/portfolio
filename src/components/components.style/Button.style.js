import styled from 'styled-components';

export const Button = styled.button`
    border-radius:34px;
    color:white;
    font-size:16px;
    border:none;
    padding:11px 26px;
    background:${({theme})=>theme.primaryColor};
    box-shadow:0px 20px 24px 3px rgb(251,161,40,0.42);

    &:hover{
        background:white;
        padding:10px 25px;
        border:1px solid ${({theme})=>theme.primaryColor};
        cursor:pointer;
        color: ${({theme})=>theme.primaryColor};
    };
    &:active{
        transform:scale(0.95);
    }
`