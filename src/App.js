import { WrapText } from "@mui/icons-material";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import AllLists from "./pages/AllLists";
import NewTodo from "./pages/NewTodo";
import ToDo from "./pages/ToDo";

const Container = styled.div`
  justify-content: center;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  width: 380px;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<AllLists />} />
          <Route exact path="/todo" element={<ToDo />} />
          <Route exact path="/newtodo" element={<NewTodo />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

export default App;
