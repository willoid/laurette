import styled, { css } from "styled-components";

const StyledModule = styled.div`
${(props) => props.title && css`
width: 100%;
border: 1px blue solid;


>h4 {
    margin-top: 0;
    margin-bottom: 50px;
    font-weight: 500;
    font-size: 30px;
}

`}
${(props) => props.pic && css`
width: 100%;
min-height: 800px;
border: 1px green solid;
background-image: url(${props => props.background});
background-size: cover;


`}
${(props) => props.legend && css`
margin-top: 10px;
border: 1px yellow solid;
line-height: none;
>h5 {
    display: inline-block;
  transform: skew(-13deg, 0);
  border: 1px green solid;
  margin: 0;
}
>h4{
    display: inline-block;
    padding-left: 10px;
    border: 1px red solid;
    font-weight: 200;
    margin: 0;
}
>p {
    display: block;
font-size: 13px;
border: 1px blue solid;
margin: 0;
}
`}
${(props) => props.audio && css`

width: 100%;
height: 300px;
border: 1px solid rebeccapurple;
display: flex;
align-items: center;
justify-content: flex-start;
`}
${(props) => props.cursive && css`
>h4 {
    margin: 0;
    padding: 20px 0;
    transform: skew(-13deg, 0);
    font-weight: 200;
    border: 1px solid goldenrod;
}
`}
${(props) => props.normaltext && css`
>h4 {
    margin: 0;
    padding: 20px 0;
    font-weight: 200;
    border: 1px solid lime;
}
`}
${(props) => props.carousel && css`
display: flex;
flex-direction: column;
width: 100%;
height: 90vh;
border: 1px solid blue;
>div {width: 100%;
    height: 70vh;
    border: 1px solid green;
background-image: url(${props=>props.carouselBg});
background-size: cover;}
    >span {
        width: 100%;
        height: 20vh;
        border: 1px solid yellow;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom: 27px;
        >img {width: 30px;
        height: 30px;
    opacity: 0.2;}
    }
`}

${(props) => props.textStyle2 && css`
>h4 {
    font-size: 22px;
}
`}
${(props) => props.textStyle3 && css`
>h4 {
    font-size: 22px;
    font-weight: 200;

}`}

${(props) => props.portrait && css`
width: 100%;
min-height: 1700px;
border: 1px green solid;
background-image: url(${props => props.background});
background-size: contain;


`}
`
export default StyledModule