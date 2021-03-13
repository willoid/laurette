import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledLanding from "../styledComponents/StyledLanding";
import landing1 from "../landing/landing1.jpg";
import landing2 from "../landing/landing2.jpg";
import landing3 from "../landing/landing3.jpg";
import landing4 from "../landing/landing4.jpg";
import landing5 from "../landing/landing5.jpg";
import landing6 from "../landing/landing6.jpg";
import landing7 from "../landing/landing7.jpg";
import landing8 from "../landing/landing8.jpg";

export default function Landing() {
  const [background, setBackground ] = useState(
    landing1
  );
 
  let bgs = [landing1, landing2, landing3, landing4, landing5, landing6, landing7, landing8]
    
  const dinamicLanding = () => {
    let i = 1;
    let bg = setInterval(() => {
      if (i < 8) {
        i++;
        setBackground(bgs[i]);
        console.log(background);
        clearInterval(bg);
      } else {
        i = 1;
        setBackground(bgs[i]);
        console.log(background);
        clearInterval(bg);
      }
    }, 1000);
  }
  
  useEffect(()=>{
    dinamicLanding();
  }, [])

  return (
    <StyledLanding background={background}>
      <Link to="/main">laurette le gall</Link>
      {/*  <Link to="/main"><i class="fas fa-bars"></i></Link> */}
    </StyledLanding>
  );
}
