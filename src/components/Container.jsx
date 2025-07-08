import React from 'react';
import omeletteImage from '../assets/image-omelette.jpeg';
import Preparation from './Preparation';

function Container() {
  return (
    <div className="container-1">
      <div>
        <img src={omeletteImage} alt="omelette-image" />
      </div>
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette combines
        beaten eggs cooked to perfection, optionally filled with your choice of
        cheese, vegetables, or meats.
      </p>
      <Preparation />
    </div>
  );
}

export default Container;