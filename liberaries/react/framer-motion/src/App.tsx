import "./App.css";

import styled, { createGlobalStyle } from "styled-components";

import logo from "./logo.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body , html{
    margin: 0;
    padding:0;
  }`;
const AppWrapper = styled(motion.main)`
  background: black;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Ball = styled(motion.main)`
  background: yellowgreen;
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

const List = styled(motion.ol)`
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20vw;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 4px solid yellowgreen;
  color: yellowgreen;

  li {
    cursor: pointer;
    font-size: xx-large;
    list-style-type: none;
    padding: 20px;
  }
`;

const CustomVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hover: {
    scale: [1.1, 0.9],
    color: "yellow",
    textShadow: "0px 0px 10px yellowgreen",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <GlobalStyle />
      <AppWrapper className="App">
        <Ball
          onClick={() => setIsActive(!isActive)}
          initial={{
            y: -1300,
          }}
          animate={{
            scale: [1, 1.5, 1],
            y: 0,
            x: isActive ? -100 : 100,
          }}
        />
        {isActive && (
          <Ball
            onClick={() => setIsActive(!isActive)}
            initial={{
              y: 200,
              x: "-100vw",
              opacity: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              stiffness: 150,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          />
        )}

        <List variants={CustomVariants} initial="hidden" animate="visible">
          {["Hamza", "Ahmed", "Osama", "khalil"].map((name, index) => (
            <motion.li
              key={name}
              variants={CustomVariants}
              // initial="hidden"
              // animate="visible"
              whileHover={"hover"}
            >
              {name}
            </motion.li>
          ))}
        </List>
      </AppWrapper>
    </>
  );
}

export default App;
