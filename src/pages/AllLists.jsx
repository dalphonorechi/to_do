import { List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";
import { Todo } from "../Data/Data";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2px;
  row-gap: 2px;
  grid-auto-rows: 170px;
  flex-direction: column;
  background-color: whitesmoke;
  height: 100%;
`;

const GridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllLists = () => {
  return (
    <Container>
      <Box>
        <NavBar />
      </Box>

      <ListWrapper>
        {Todo.map((item) => {
          return (
            <GridCell>
              <TodoItem item={item} key={item.title} />
            </GridCell>
          );
        })}
      </ListWrapper>
    </Container>
  );
};

export default AllLists;
