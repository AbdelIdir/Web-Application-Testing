import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background:beige;
  `;
  const Button = styled.div`
    width: 200px;
    padding: 40px;
    background: purple;
    border-radius: 15px;
  `;
  const Display = styled.div`
    width: 300px;
    padding: 30px;
    background: green;
  `;
  return (
    <div className="App">
      <Container>
        <Button>hi</Button>
        <Display></Display>
      </Container>
    </div>
  );
}

export default App;
