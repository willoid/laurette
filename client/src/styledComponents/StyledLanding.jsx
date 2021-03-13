import styled from "styled-components";

const StyledLanding = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${props => props.background});
background-size: cover;
transition: all ease-in-out 1s;
>a {text-decoration: none;}

`

export default StyledLanding