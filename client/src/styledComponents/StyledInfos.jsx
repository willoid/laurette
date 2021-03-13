import styled, { css } from "styled-components";

const StyledInfos = styled.div`
  margin: 0;
  padding: 100px;
  background: #d9d9d9;

  > h4 {
    margin: 0;
    padding: 0;
    font-weight: 200;
  }

  > h6 {
    margin: 0;
    padding: 20px 0 0 0;
    font-size: 18px;
  }

  >h7 {
      font-size: 20px;
      grid-column: 1 / 2;
  }

  > h8 {font-size: 20px;
grid-column: 2 /3;}
  >div{
      display: grid;
      grid-template-columns: 100px 1fr;

    }
`;

export default StyledInfos;
