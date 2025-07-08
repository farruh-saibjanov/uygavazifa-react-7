
import React from 'react';
import Container from './components/Container';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';
import './index.css';

function App() {
  return (
    <section className="all">
      <Container />
      <Ingredients />
      <hr />
      <Instructions />
      <Nutrition />
    </section>
  );
}

export default App;
