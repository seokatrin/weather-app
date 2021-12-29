import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${(props) => props.theme.themes.background || "#252432"};
    color: ${(props) => props.theme.themes.color || "#959412"} ;
    font-family: sans-serif;
    font-weight: bold;
}
`;

export const themes = {
  light: {
    background: "rgb(240,240,64)",
    color: "#4d3f34",
  },
  dark: {
    background: "rgb(37,36,50)",
    color: "#eaebef",
  },
};

export const media = {
    media: {
        tablet: '(min-width: 426px)',
    },
    backgroundWrap: "rgb(255,255,255, 0.2)",
}

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.themes.color || "#000"};
    `};
  img {
    width: 75px;
  }
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

const StyledWrapper = styled(StyledFlex)`
  max-width: 500px;
  min-height: 100vh;
  padding: 60px;
  font-size: 24px;
  @media ${(props) => props.theme.media.media.tablet} {
    background: ${(props) => props.theme.media.backgroundWrap};
    margin: 50px auto;
    border-radius: 20px;
    min-height: 80vh;
  }
`;

export const WrapperApp = (props) => {
  return <StyledWrapper {...props} />;
};

export const StyledDiv = styled.div`
  font-size: ${(props) => props.size || "20px"};
  color: ${(props) => props.theme.themes.color || "#000"};
`;

export const Div = (props) => {
  return <StyledDiv {...props} />;
};

const StyledSpan = styled.span`
  margin: ${(props) => props.margin || "0"};
`;

export const Span = (props) => {
  return <StyledSpan {...props} />;
};
