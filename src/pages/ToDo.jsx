import { Box } from "@mui/system";
import { Dialog, Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import TodoBar from "../components/TodoBar";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const ToDo = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Box>
        <TodoBar onDelete={handleClickOpen} />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ToDo;
