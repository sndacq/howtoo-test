import React, { useState, useCallback } from "react";
import Tab from "./Tabs";

const HomePage = () => {
  const tabs = [
    'Home',
    'Topic 1',
    'Topic 2',
    'Topic 3',
    'Topic 4',
    'Topic 5',
  ];

  const paragraph = `
    lOREM iPSUM
  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.
    
    Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.
    
    Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.
  `

  const [activeTab, setActiveTab] = useState(0);
  
  const generateTabs = useCallback((items) => {
    return items.map((tab, index) => {
      return <Tab text={tab} active={activeTab === index} setActiveTab={() => setActiveTab(index)} />
    });
  }, [activeTab])

  const HomeContent = (
    <>
      <img className="home-logo" src="./images/logo.svg"/>
      <p>{paragraph}</p>
    </>        
  );

  const TopicContent = (
    <>
      <img className="topic-logo" src="./images/logo.svg"/>
      <h1><b>LOREM IPSUM DOLOR SIT</b></h1>
      <button className="begin-button">BEGIN</button>
    </>
  );

  return (
    <div className="topic-page">
      <div className="banner">
        <div className="description-panel">
          {activeTab === 0 ? HomeContent : TopicContent}
        </div> 
        <div className="content-panel">
          <img className="background" src={activeTab === 0 ? "./images/background.svg" : "./images/background2.svg" }/>
        </div>
      </div>
      <div className="footer-tabs">
        {generateTabs(tabs)}
      </div>
    </div>
  );
};

export default HomePage;