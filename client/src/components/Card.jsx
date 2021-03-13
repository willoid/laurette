import React, { useState, useEffect } from "react";
import StyledCard from "../styledComponents/StyledCard";
import StyledModule from "../styledComponents/StyledModule";
import landing2 from "../landing/landing2.jpg"

export default function Card() {

    const background = landing2;

  return(
  <StyledCard>
      <StyledModule title><h4>A l'origine il y a eu la ruine</h4></StyledModule>
      <StyledModule pic background={background}></StyledModule>
      <StyledModule legend>
          <h5>A l'origine il y a eu la ruine,</h5>
          <h4>2015</h4>
          <p>492 * 698 cm - plâtre, dispositif sonore pour deux canaux.</p>
          <p>deux pistes de 13,20 mn</p>
      </StyledModule>
      <StyledModule audio><p>audio player / multiplayer hier</p></StyledModule>
      <StyledModule cursive><h4>Lorem ipsum dolor sit.</h4>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas quam porro iure? Alias culpa fugiat, nemo odio illum, hic placeat voluptatem ipsam ipsum ipsa enim vel cupiditate maxime vitae, tempore consectetur. Ipsam cupiditate, enim quos reprehenderit quidem esse ullam, repellat autem voluptatem consequuntur, accusamus ea quae impedit et vel.</h4>
      <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto officiis voluptatibus rerum tempora aperiam excepturi nulla dolor a quia aliquam, repellat eius ipsum architecto esse, quam debitis, quo molestiae delectus. Maiores consequatur suscipit ducimus doloremque, error possimus! Voluptate quis in numquam natus odio, iusto accusamus beatae pariatur incidunt maiores ullam cum quo odit labore nesciunt quisquam voluptas velit illum tempora.</h4>
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eum rerum at, facilis corrupti hic pariatur voluptates dolorum modi obcaecati, ea corporis aspernatur natus suscipit numquam. Eligendi dicta pariatur magnam temporibus laboriosam veritatis facilis assumenda incidunt, libero, aliquam animi, rem eius quas quisquam enim repellat.</h4></StyledModule>
      <StyledModule normaltext>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus delectus aliquam dolores dolore in tempore similique ipsam, nisi quasi asperiores.</h4>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sequi animi reprehenderit. Maiores porro sint dolorem explicabo cupiditate natus iure dolores dolorum? Natus enim nostrum voluptatum quaerat mollitia excepturi, praesentium pariatur dolorum adipisci tempore voluptatem aliquid deserunt quibusdam, numquam sit amet dolore labore, aspernatur delectus ratione esse illum? Repellendus, vero fugiat iste delectus ea esse, fuga rerum laboriosam quibusdam et earum molestias ipsa, illum magnam id voluptas libero natus quisquam!</h4>
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium repellendus maxime sint, vitae et repellat consequuntur fugiat ipsam similique praesentium culpa obcaecati nostrum sequi placeat quisquam recusandae officiis, illum eveniet magni tenetur saepe assumenda. Deleniti hic officia repudiandae laborum fugit soluta sint obcaecati distinctio? Perspiciatis.</h4>
      </StyledModule>
      <StyledModule carousel carouselBg={background}> <span><div>gauche</div><div>droite</div></span><div ></div></StyledModule>
    
  </StyledCard>);
}
