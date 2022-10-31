import React from 'react';
import "./startpage.css"

const StartPage = () => {
  return (
    <div className="start-page">
      <div className='main-panel'>
        <div className='left-panel'>
          <h1 className='banner-title'>LOREM IPSUM</h1>
          <img className="img-logo" src="./images/logo.svg"/>
          <div className='start'>
            <p>Click begin to get started</p>
          </div>
        </div>
        <div className='right-panel'>
          <img className="img-globe" src="./images/globe.svg"/>
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default StartPage;
