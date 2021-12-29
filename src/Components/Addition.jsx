import {
  faSun,
  faThermometerFull,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Flex, Div, Span } from "../StylesComponents/Styles";

const Addition = ({feels_like, suntime, wind, sun}) => {
  return (
    <Div>
      <Flex border justify="space-between" align="center" padding="15px 0">
        <p>Ощущается как</p>
        <Div>
          <Span margin="0 10px 0">{feels_like}<span>&#176;</span></Span>
          <FontAwesomeIcon icon={faThermometerFull} />
        </Div>
      </Flex>
      <Flex border justify="space-between" align="center" padding="15px 0">
        <p>{sun}</p>
        <Div>
          <Span margin="0 10px 0">{suntime}</Span>
          <FontAwesomeIcon icon={faSun} />
        </Div>
      </Flex>
      <Flex justify="space-between" align="center" padding="15px 0">
        <p>Ветер</p>
        <Div>
          <Span margin="0 10px 0">{wind} м/с</Span>
          <FontAwesomeIcon icon={faWind} />
        </Div>
      </Flex>
    </Div>
  );
};

export default Addition;
