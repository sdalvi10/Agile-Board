import React from "react";
import styled from "styled-components";
import LeftImage from "../Images/teamwork1.png";
import RightImage from "../Images/work2.jpeg";

const Container = styled.div`
  background-color: #f9fafc;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -900;
`;

const LeftSide = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -999;
  width: 50vw;
  height: 40vh;
  max-width: 550px;
`;
const RightSide = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -999;
  width: 37vw;
  height: 40vh;
  max-width: 550px;
`;

const Svg = styled.img`
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

const Background = () => {
  return (
    <Container>
      <LeftSide>
        <Svg src={LeftImage} />
      </LeftSide>
      <RightSide>
        <Svg src={RightImage} />
      </RightSide>
    </Container>
  );
};

export default Background;
