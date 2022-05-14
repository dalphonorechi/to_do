import { Box } from "@mui/system";
import { Dialog, Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import TodoBar from "../components/TodoBar";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useLocation, useNavigate } from "react-router";
import { Todo } from "../Data/Data";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
`;
const Content = styled.p``;
const ToDo = () => {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const location = useLocation();

  const { item } = location.state;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const index = Todo.findIndex((i) => i.title === item.title);
    Todo.splice(index, 1);
    history(-1);
  };
  return (
    <Container>
      <Box>
        <TodoBar
          onDelete={handleClickOpen}
          barColor={item.color}
          barTitle={item.title}
        />
      </Box>
      <Wrapper>
        <Content>{item.list}</Content>
      </Wrapper>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ToDo;
