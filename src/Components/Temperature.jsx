import React from "react";
import { Flex, Span } from "../StylesComponents/Styles";

const Temperature = ({ temp, icon }) => {
  return (
    <Flex direction="column" align="center">
      <img src={`https://openweathermap.org/img/w/${icon}.png`} />
      <Span>
        {temp}
        <span>&#176;</span>
      </Span>
    </Flex>
  );
};

export default Temperature;
