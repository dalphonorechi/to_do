import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import NewBar from "../components/NewBar";
import { Colors, Todo } from "../Data/Data";
import { useNavigate } from "react-router";

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
const WrapperColors = styled.div`
  display: flex;
  padding: 10px;
`;
const Color = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;
const NewTodo = () => {
  const [color, setColor] = useState(Colors[0]);
  const [title, setTitle] = useState("New to do");
  const [list, setList] = useState("");
  const navigate = useNavigate();

  function handleColor(colorString) {
    setColor(colorString);
  }
  function saveTodo() {
    const New = {
      title: title,
      color: color,
      list: list,
    };

    Todo.push(New);
    navigate(-1);
  }
  return (
    <Container>
      <Box>
        <NewBar barColor={color} barTitle={title} onSave={saveTodo} />
      </Box>
      <Wrapper>
        <WrapperColors>
          {Colors.map((color) => {
            return (
              <Color
                bgColor={color}
                onClick={() => handleColor(color)}
                key={color}
              ></Color>
            );
          })}
        </WrapperColors>
        <TextField
          id="standard-basic"
          fullWidth
          label="Title"
          variant="standard"
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          sx={{ mt: 10 }}
          id="outlined-multiline-static"
          label="To Do List "
          multiline
          rows={10}
          defaultValue="Enter your List"
          onChange={(event) => setList(event.target.value)}
        />
      </Wrapper>
    </Container>
  );
};

export default NewTodo;
