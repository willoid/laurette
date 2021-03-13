import styled, {css} from "styled-components";

export const StyledNavigator = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
 
  >h3 {
      color: #075dfc;
      font-size: 30px;
      margin: 0;
      padding: 0;
  }
  
  > a {
      text-decoration: none;
      color: inherit;
  }
`;
export const StyledLink = styled.h2`
text-decoration: none;
text-align: right:
color: inherit;
padding-right: 20px;
 `;

 export const StyledLinkH3 = styled.h3`
 text-align: left;
 padding: 0;
 color: #075dfc;
 font-size: 30px;
 margin-top: 0px;
 padding: 5px;
 
 ${(props)=>props.landing && css`
 color: white;
 text-decoration: none;
 font-size: 50px;`}`

 
