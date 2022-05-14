import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NewBar from "../components/NewBar";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: whitesmoke;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;
const ListWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const NewTodo = () => {
  return (
    <Container>
      <Box>
        <NewBar />
      </Box>
      <Wrapper>
        <TextField
          id="standard-basic"
          fullWidth
          label="Title"
          variant="standard"
        />
        <TextField
          sx={{ mt: 10 }}
          id="outlined-multiline-static"
          label="To Do List "
          multiline
          rows={10}
          defaultValue="Enter your List"
        />
      </Wrapper>
    </Container>
  );
};

export default NewTodo;
