import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledLanding from "../styledComponents/StyledLanding";
import {StyledLinkH3} from "../styledComponents/StyledNavigator"
import landing1 from "../landing/landing1.jpg";
import landing2 from "../landing/landing2.jpg";
import landing3 from "../landing/landing3.jpg";
import landing4 from "../landing/landing4.jpg";
import landing5 from "../landing/landing5.jpg";
import landing6 from "../landing/landing6.jpg";
import landing7 from "../landing/landing7.jpg";
import landing8 from "../landing/landing8.jpg";

export default function Landing() {
  const [background, setBackground] = useState([]);

  let bgs = [
    landing1,
    landing2,
    landing3,
    landing4,
    landing5,
    landing6,
    landing7,
    landing8,
  ];

  const dinamicLanding = () => {
    let i = 0;
    let bg = setInterval(() => {
      if (i < 7) {
        i++;
        setBackground(bgs[i]);
        console.log(background);
      } else if (i === 7) {
        i = 0;
        setBackground(bgs[i]);
        console.log(background);
      }
    }, 6000);
    return () => clearInterval(bg);
  };

  useEffect(() => {
    setBackground(bgs[0])
    dinamicLanding();
  }, []);

  return (
    <StyledLanding background={background}>
      <Link to="/main"><StyledLinkH3 landing>laurette  le  gall</StyledLinkH3></Link>
      {/*  <Link to="/main"><i class="fas fa-bars"></i></Link> */}
    </StyledLanding>
  );
}
