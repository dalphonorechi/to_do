import { Box } from "@mui/system";
import { TextField } from "@mui/material";

import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewBar from "../components/NewBar";
import { Colors, Todo } from "../Data/Data";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToNotes } from "../Store/NotesSlice";
import { nanoid } from "nanoid";

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
  margin-bottom: 10px;
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

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));
const NewTodo = () => {
  const dispatch = useDispatch();
  let [color, setColor] = useState(Colors[0]);
  let [title, setTitle] = useState("New to do");
  let [list, setList] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const { from } = location.state;
  const { item } = location.state;
  useEffect(() => {
    if (from === "edit") {
      setColor(item.color);
      setTitle(item.title);
      setList(item.list);
    }
  }, []);

  function handleColor(colorString) {
    setColor(colorString);
  }
  function saveTodo() {
    if (from === "new") {
      const New = {
        id: nanoid(),
        title: title,
        color: color,
        list: list,
      };
      // console.log(New.id);

      dispatch(addToNotes(New));
      navigate(-1);
    } else {
      const index = Todo.findIndex((i) => i.id === item.id);
      const New = {
        id: index,
        title: title,
        color: color,
        list: list,
      };

      Todo[index] = New;
      navigate(-2);
    }
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
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          sx={{
            mt: 10,
            backgroundColor: color,
            height: "100%",
          }}
          id="outlined-multiline-static"
          multiline
          rows={14}
          defaultValue={list}
          onChange={(event) => setList(event.target.value)}
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default NewTodo;
