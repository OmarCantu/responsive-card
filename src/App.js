import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Card from './components/card/Card';
import { CARD_DATA } from './mockData';

const GlobalStyle = createGlobalStyle`
  html * {
    box-sizing: border-box;
    font-family: sans-serif, Arial, Helvetica;
  }

  h2 {
    margin: 0;
  }

  body {
    padding: 1rem;
  }
`

const { tile, title } = CARD_DATA;

function App() {
  return (
    <main className="app">
      <GlobalStyle />

      <Card tile={tile} title={title} />
    </main>
  );
}

export default App;
