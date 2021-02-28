import styled from "styled-components";

const StyledLanding = styled.main`
border: 1px red solid;
width: 100vw;
height: 100vh;
background-image: url(${props => props.background});

>img {
    width: 800px;
    height: 800px
}
`

export default StyledLanding