import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledLanding from "../styledComponents/StyledLanding";

export default function Landing() {
  const [background, setBackground] = useState(
    "../uploads/landing/landing1.jpg"
  );
  useEffect(() => {
    let i = 1;
    let bg = setInterval(() => {
      if (i < 8) {
        i++;
        setBackground(`../uploads/indexImages/landing${i}.jpg`);
        console.log(background);
        clearInterval(bg);
      } else {
        i = 1;
        setBackground(`../uploads/indexImages/landing${i}.jpg`);
        console.log(background);
        clearInterval(bg);
      }
    }, 1000);
  }, [background]);

  return (
    <StyledLanding background={background}>
      <Link to="/main">laurette le gall</Link>
      <img src={background} alt="test"></img>
      {/*  <Link to="/main"><i class="fas fa-bars"></i></Link> */}
    </StyledLanding>
  );
}
