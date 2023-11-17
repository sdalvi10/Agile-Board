import React, { useEffect } from "react";
import IndexNav from "../../IndexNav";
import { useHistory } from "react-router-dom";
import ScrumBoard from "../../../Images/scrum_board.jpeg";

import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
} from "./Styled";

const Index = () => {
  let history = useHistory();
  useEffect(() => {
    document.title = "Agile Board";
  }, []);
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>AgileBoard </Title>
              <Text>
                Designed to help teams follow agile project management process.
              </Text>
              <Button onClick={() => history.push("/register")}>
                Sign up - it's free
              </Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src={ScrumBoard} />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
