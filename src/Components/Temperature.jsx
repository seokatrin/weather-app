import React from "react";
import { Flex, Span } from "../StylesComponents/Styles";

const Temperature = ({ temp, icon, description }) => {
  return (
    <Flex direction="column" align="center">
      <img src={`https://openweathermap.org/img/w/${icon}.png`} />
      <Span margin='0 0 10px 0'>
        {temp}
        <span>&#176;</span>
      </Span >
      {description[0].toUpperCase() + description.slice(1)}
    </Flex>
  );
};

export default Temperature;
