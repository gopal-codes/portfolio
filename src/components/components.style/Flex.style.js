import styled from "styled-components";

export const FlexColumn=styled.div`
display:flex;
flex-direction:column;
gap:0.1rem;
@media only screen and (max-width: 768px) {
        gap:0;
        margin-top:0;
        align-items:center;
}
`
export const Flexrow= styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:2rem;
text-align:center;
`