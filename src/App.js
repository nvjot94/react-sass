import React from 'react';
import './App.scss';
import mainImg from './youtube.png';
function App() {
  return (
    <div className="app">
      <div className='container'> </div>
      <header><h2> Overview of Sass</h2></header>
      <main>
        <div className="main-img">
          <img
            src={mainImg}
            alt="youtube"
            width="100%"
            height="100%"
          />
          <p>Watch latest video</p>
        </div>
        <div className="main-btn">
          <a href="/#">Subscibe Now!</a>
        </div>
      </main>


    </div>
  );
}

export default App;