import "./App.css";

import logo from "./logo.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const AppWrapper = styled(motion.main)`
  background: black;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Ball = styled(motion.main)`
  background: white;
  height: 5vw;
  width: 5vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
`;

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AppWrapper className="App">
      <Ball
        onClick={() => setIsActive(!isActive)}
        animate={{
          scale: [1, 1.5, 1],
          x: isActive ? -100 : 100,
        }}
      />
    </AppWrapper>
  );
}

export default App;
