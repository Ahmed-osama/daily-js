import "./App.css";

import logo from "./logo.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const AppWrapper = styled(motion.main)`
  background: black;
`;

function App() {
  const [count, setCount] = useState(0);

  return <AppWrapper className="App"></AppWrapper>;
}

export default App;
