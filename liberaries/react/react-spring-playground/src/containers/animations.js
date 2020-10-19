import styled from 'styled-components';
import { animated } from 'react-spring';
export const Box = styled(animated.div)`
  width:250px;
  height:250px;
  border-radius:2px;
  background:${({ theme }) => theme.pink};
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:64px;
  flex-direction:column;
  margin:10px;
`