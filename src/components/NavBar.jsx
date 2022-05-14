import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const AddTodo = styled(Link)`
  color: white;
`;
const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo List
        </Typography>
        <AddTodo to={"/newtodo"} state={{ from: "new" }}>
          <Button color="inherit">
            <Add color="white" />
          </Button>
        </AddTodo>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
