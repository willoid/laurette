import React, { useState } from "react";
import StyledCard from "../styledComponents/StyledCard";
import StyledModule from "../styledComponents/StyledModule";
import landing2 from "../landing/landing2.jpg";
import testPortrait from "../landing/portraitTest.jpg";
import flecheDroite from "../landing/flecheDroite.png";
import flecheGauche from "../landing/flecheGauche.png";
import menuNoir from "../landing/menuNoir.png";
import StyledButton from "../styledComponents/StyledButton";
import StyledPage from "../styledComponents/StyledPage";
import {StyledForm, StyledSelect} from "../styledComponents/StyledForm";

export default function NewPage() {
  const openForm = (type) => {
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
    <StyledPage>
      <StyledForm>
        <input type="text" name="titulo" placeholder="title" />{" "}
      </StyledForm>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos1(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos2(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos3(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos4(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos5(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos6(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos7(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos8(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos9(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos10(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos11(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos12(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos13(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos14(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos15(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos16(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos17(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos18(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos19(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos20(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
      <StyledSelect id="pos1" name="pos1" onChange={(e)=>{setPos21(e.target.value)}}>
          <option value="empty">wähle eine option aus</option>
          <option value="pic">bild landscape</option>
          <option value="portrait">bild portrait</option>
          <option value="legend">legende</option>
          <option value="carousel">carousel</option>
          <option value="normaltext">text1</option>
          <option value="textStyle2">text2</option>
          <option value="textStyle3">text3</option>
          <option value="cursive">text4</option>
          <option value="audio">audio</option>
      </StyledSelect>
    </StyledPage>
  );
}
