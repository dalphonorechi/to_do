import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Add, Edit, Save } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: whitesmoke;
`;
const AddTodo = styled(Link)`
  color: white;
`;
const NewBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          New To do
        </Typography>
          <Button color="inherit">
            <Save color="white" />
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NewBar;
