import React, { useReducer, useRef } from "react";
import styled from "styled-components";
import { useSpring, animated, interpolate } from "react-spring";
import { Box } from "./animations";

const Layout = styled.section`
  display: flex;
`;

const Controls = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 250px;
`;

const Row = styled.aside`
  display: flex;
  align-items: center;
  * + label {
    margin-left: 5px;
  }
`;
const Content = styled.main`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
`;
const Examples = () => {
  const [animation, setAnimation] = useSpring(() => ({
    opacity: 1,
    number: 200,
    scale: 0,
    config: {
      mass: 10,
      tension: 500,
      friction: 50
    }
  }));

  return (
    <>
      <Layout>
        <Controls>
          <Row>
            <input
              type="checkbox"
              onChange={({ target }) =>
                setAnimation({ opacity: target.checked ? 1 : 0 })
              }
              id="opacity_input"
              defaultChecked
            />
            <label htmlFor="opacity_input">opacity</label>
          </Row>
          <Row>
            <input
              type="range"
              min="200"
              max="300"
              onChange={({ target }) =>
                setAnimation({ number: parseInt(target.value) })
              }
              id="width_input"
              defaultChecked
            />
            <label htmlFor="width_input">width</label>
          </Row>
          <Row>
            <input
              type="range"
              min="0"
              max="9"
              onChange={({ target }) =>
                setAnimation({ scale: parseInt(target.value) })
              }
              id="scale_input"
              defaultChecked
            />
            <label htmlFor="scale_input">scale</label>
          </Row>
        </Controls>
        <Content>
          <Box style={{ opacity: animation.opacity.interpolate(x => x) }}>
            opacity
          </Box>
          <Box style={{ width: animation.number.interpolate(x => `${x}px`) }}>
            width
          </Box>
          <Box
            style={{
              transform: animation.scale.interpolate(
                x => `scale(${1 + x / 10})`
              )
            }}
          >
            scale
          </Box>
        </Content>
      </Layout>
    </>
  );
};
export default Examples;
