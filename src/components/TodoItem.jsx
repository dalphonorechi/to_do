import React from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;
const TitleContainer = styled.div``;

const Title = styled.h3`
  font-weight: 400;
`;
const ContentContainer = styled.div`
  padding: 5px;
`;
const Content = styled.p`
  font-weight: 200;
  margin-bottom: 3px;
`;
const OpenTodo = styled(Link)`
text-decoration: none;
`;
const TodoItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 150,
          height: 150,
        },
      }}
    >
      <OpenTodo to={"/todo"}>
        <Paper
          sx={{
            backgroundColor: "#663399",
          }}
        >
          <Container>
            <TitleContainer>
              <Title>Shopping</Title>
            </TitleContainer>
            <ContentContainer>
              <Content>Juice</Content>
              <Content>Detergent</Content>
              <Content>Snacks</Content>
              <Content>Fruits</Content>
              <Content>Pants</Content>
            </ContentContainer>
          </Container>
        </Paper>
      </OpenTodo>
    </Box>
  );
};

export default TodoItem;
