import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

 function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background: #b39797;
  `;
  const Button = styled.div`
    width: 200px;
    padding: 40px;
    background: purple;
    border-radius: 15px;
  `;
  const Display = styled.div`
    width: 600px;
    padding: 30px;
    background: black;
    color: red;
    border-radius: 10px;
  `;

  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);

  const strikeHandler = event => {
    event.preventDefault();
    setStrike(previouscount => previouscount + 1);
  };

  const foulHandler = event => {
    event.preventDefault();
    if (strike === 0) {
      return setStrike(previouscount => previouscount + 1);
    } else if (strike === 1) {
      return setStrike(previouscount => previouscount + 1);
    } else if (strike === 2) {
      return setStrike(previouscount => previouscount);
    }
  };
  const hitHandler = event => {
    event.preventDefault();
    setHit(previouscount => previouscount + 1);
  };

  const ballHandler = event => {
    event.preventDefault();
    setBall(previouscount => previouscount + 1);
  };
  useEffect(() => {
    if (ball >= 4) {
      return setBall(0), setStrike(0);
    }
    if (strike >= 3) {
      return setStrike(0), setBall(0);
    }
    if (hit === 1) {
      return setBall(0), setStrike(0);
    }
  }, [ball, strike, hit]);
  return (
    <div className="App">
      <Container>
        <Display>
          <p>Balls: {ball}</p>
          <p>Strikes: {strike}</p>
        </Display>
        <Button onClick={strikeHandler}>Strike</Button>
        <Button onClick={ballHandler}>Ball</Button>
        <Button onClick={foulHandler}>Foul</Button>
        <Button onClick={hitHandler}>Hit</Button>
      </Container>
    </div>
  );
}

export default App;
