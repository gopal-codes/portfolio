import styled from "styled-components";

export const Wrapper = styled.div`
    width:calc(100%-40px);
    padding:20px 40px;
    display:flex;
    @media only screen and (max-width: 768px) {
        padding:0px 10px;
    }
`

export const Left = styled.div`
    display:flex;    
    align-items:center;
    flex:1;
`

export const Right = styled.div`
    flex:1;     
    display:flex;   
    align-items:center;
`