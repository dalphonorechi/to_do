import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";

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
  const notes = useSelector((state) => state.notes.value);
  return (
    <Container>
      <Box>
        <NavBar />
      </Box>

      <ImageList sx={{ width: "100%" }} cols={2} rowHeight={170}>
        {notes.map((item) => {
          return (
            <ImageListItem key={item.id}>
              <TodoItem item={item} key={item.id} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
};

export default AllLists;
