import React from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
`;

const Title = styled.h3`
  font-weight: 400;
  color: white;
`;
const ContentContainer = styled.div`
  padding: 10px;
  flex: 3;
  white-space: wrap;
`;
const Content = styled.p`
  color: white;
  line-height: 1em;
  max-width: 90%;
  text-overflow: ellipsis;
`;
const OpenTodo = styled(Link)`
  text-decoration: none;
`;
const TodoItem = (props) => {
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
      <OpenTodo to={"/todo"} state={{ item: props.item }}>
        <Paper
          sx={{
            backgroundColor: props.item.color,
            width: "100%",
            height: "100%",
          }}
        >
          <Container>
            <TitleContainer>
              <Title>{props.item.title}</Title>
            </TitleContainer>
            <ContentContainer>
              <Content>{props.item.list}</Content>
            </ContentContainer>
          </Container>
        </Paper>
      </OpenTodo>
    </Box>
  );
};

export default TodoItem;
