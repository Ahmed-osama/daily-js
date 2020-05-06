import React from 'react';
import styled from 'styled-components'
import Examples from './containers/examples'
const Header = styled.header`
  height:100px;
  background:white;
  position:fixed;
  display:flex;
  top:0;
  left:0;
  width:100%;
  background:${({ theme }) => theme.blue};
  color:${({ theme }) => theme.white};
  justify-content:center;
  align-items:center;
  font-size:32px;

`
const Container = styled.section`
  max-width:800px;
  margin:auto;
`
function App() {
  return (
    <div className="App">
      <Header>

        React spring Playground

      </Header>
      <Container>
        <Examples />
      </Container>
    </div>
  );
}

export default App;
