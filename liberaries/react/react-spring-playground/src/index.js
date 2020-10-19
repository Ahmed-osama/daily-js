import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background:${({ theme }) => theme.orange};
    padding:130px 0 0 0;
    font-family: 'Anton';
    color:${({ theme }) => theme.dark};
  }
`
const styleTheme = {
  lightGry: '#f9f9f9',
  white: '#ffffff',
  orange: '#ffe0ac',
  pink: '#ffacb7',
  blue: '#6886c5',
  dark: '#222831'
}
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={styleTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

