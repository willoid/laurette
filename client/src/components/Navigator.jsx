import React from "react";
import {Link} from "react-router-dom";
import {StyledNavigator, StyledLink, StyledLinkH3} from "../styledComponents/StyledNavigator"

export default function Navigator() {
  return (
    <StyledNavigator>
  <Link to="/laurette"><StyledLinkH3>LAURETTE  LE  GALL</StyledLinkH3></Link>
  <h2>TRAVAUX</h2>
  <h2>SON</h2>
  <h2>AQUARELLE</h2>
  <Link to="/bonus"><StyledLink>BONUS</StyledLink></Link>
  <Link to="/infos"><StyledLink>INFOS</StyledLink></Link>
  </StyledNavigator>)
}
