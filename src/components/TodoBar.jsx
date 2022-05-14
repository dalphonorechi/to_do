import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const TodoBar = (props) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: props.barColor }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.barTitle}
        </Typography>
        <Button color="inherit" onClick={props.onDelete}>
          <Delete color="white" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TodoBar;
