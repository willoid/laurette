import React, { useState } from "react";
import StyledCard from "../styledComponents/StyledCard";
import StyledModule from "../styledComponents/StyledModule";
import flecheDroite from "../landing/flecheDroite.png";
import flecheGauche from "../landing/flecheGauche.png";
import menuNoir from "../landing/menuNoir.png";
import StyledButton from "../styledComponents/StyledButton";
import mockup from "../mockup";

export default function TestCard() {
  const [mockUp] = useState(mockup);


  const getModule = (type) => {
    switch (type.type) {
      case "bg":
        return <StyledModule pic background={type.data.picUrl}></StyledModule>;
      case "legend":
        return (
          <StyledModule legend>
            <h5>{type.data.h5}</h5>
            <h4>{type.data.h4}</h4>
            <p>{type.data.p1}</p>
            <p>{type.data.p2}</p>
          </StyledModule>
        );
      case "audio":
        return (
          <StyledModule audio>
            <p>here comes the audioplayer</p>
          </StyledModule>
        );
      case "cursive":
        return (
          <StyledModule cursive>
            <h4>{type.data.p1}</h4>
            <h4>{type.data.p2}</h4>
            <h4>{type.data.p3}</h4>
          </StyledModule>
        );
      case "normal":
        return (
          <StyledModule normaltext>
            <h4>{type.data.p1}</h4>
            <h4>{type.data.p1}</h4>
            <h4>{type.data.p1}</h4>
          </StyledModule>
        );
      case "carousel":
        return (
          <StyledModule carousel carouselBg={type.data[0].picUrl}>
            <span>
              <img src={flecheGauche} alt="fleche gauche" />
              <img src={flecheDroite} alt="fleche droite" />
            </span>
            <div></div>
          </StyledModule>
        );
      case "text2":
        return (
          <StyledModule textStyle2>
            <h4>{type.data.p1}</h4>
            <h4>{type.data.p2}</h4>
            <h4>{type.data.p3}</h4>
          </StyledModule>
        );
      case "text3":
        return (
          <StyledModule textStyle3>
            <h4>{type.data.p1}</h4>
            <h4>{type.data.p2}</h4>
            <h4>{type.data.p3}</h4>
          </StyledModule>
        );
      case "portraitBg":
        return (
          <StyledModule portrait background={type.data.picUrl}></StyledModule>
        );
      default:
        return <p>there is an error</p>;
    }
  };

  return (
    <StyledCard>
      <StyledModule title>
        <h4>{mockUp.titulo}</h4>
      </StyledModule>
      {getModule(mockUp.pos1)} {console.log(mockUp.pos1)}
      {getModule(mockUp.pos2)} {console.log(mockUp.pos2)}
      {getModule(mockUp.pos3)} {console.log(mockUp.pos3)}
      {getModule(mockUp.pos4)} {console.log(mockUp.pos4)}
      {getModule(mockUp.pos5)}
      {getModule(mockUp.pos6)}
      {getModule(mockUp.pos7)}
      {mockUp.pos8 ? getModule(mockUp.pos8) : null}
      {mockUp.pos9 ? getModule(mockUp.pos9) : null}
      {mockUp.pos10 ? getModule(mockUp.pos10) : null}
      {mockUp.pos11 ? getModule(mockUp.pos11) : null}
      {mockUp.pos12 ? getModule(mockUp.pos12) : null}
      {mockUp.pos13 ? getModule(mockUp.pos13) : null}
      {mockUp.pos14 ? getModule(mockUp.pos14) : null}
      {mockUp.pos15 ? getModule(mockUp.pos15) : null}
      {mockUp.pos16 ? getModule(mockUp.pos16) : null}
      {mockUp.pos17 ? getModule(mockUp.pos17) : null}
      {mockUp.pos18 ? getModule(mockUp.pos18) : null}
      {mockUp.pos19 ? getModule(mockUp.pos19) : null}
      {mockUp.pos20 ? getModule(mockUp.pos20) : null}
      {mockUp.pos21 ? getModule(mockUp.pos21) : null}
      {mockUp.pos22 ? getModule(mockUp.pos22) : null}
      {mockUp.pos23 ? getModule(mockUp.pos23) : null}
      {mockUp.pos24 ? getModule(mockUp.pos24) : null}

      <StyledButton>
        <img src={menuNoir} alt="menu"></img>
      </StyledButton>
    </StyledCard>
  );
}
