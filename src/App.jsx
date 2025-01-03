import styled from "styled-components";
import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";
import HomePage from "./HomePage";

const Container = styled.div`
  background: #F4F4FA;
  height: 120vh;
`;

function App() {
  return (
    <BrowserRouter basename="/">
      <Container>
      {/* <BrowserRouter basename=""> */}
      <Routes>
            <Route path="/">
              <Route index element={<HomePage/>}/>
              
            </Route>
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
