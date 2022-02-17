import React from 'react';
import {BsStar, BsStarFill} from 'react-icons/bs'
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="box one">
        <div className="details">
          <div className="topic">Description</div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laborum nulla delectus illum dolor nemo quo impedit minima. Architecto rerum consectetur voluptas molestiae assumenda temporibus iure tempore fugit illum corrupti?</p>
          <div className="rating">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
          </div>
          <div className="price-box">
            <div className="discount">R$ 1800.00</div>
            <div className="price">R$ 2500.00</div>
          </div>
        </div>
        <div className="button1">
          <button>Adicionar</button>
        </div>
      </div>
      <div className="box two">
        <div className="image-box">
          <div className="image">
            <img src="images/camera.png" alt="" />
          </div>
          <div className="info">
            <div className="brand">SONY</div>
            <div className="name">SONY ALPHA A7 KIT</div>
            <div className="shipping">Frete Grátis</div>
            <div className="button2">
              <button>Mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
