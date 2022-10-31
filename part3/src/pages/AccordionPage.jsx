import React, { useState, useCallback } from "react";
import AccordionRow from "./AccordionRow";

const AccordionPage = () => {
  const dummyString = 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. '
  const accordionContent = {
    'LOREM IPSUM': dummyString,
    'LOREM IPSUM 2': dummyString,
    'LOREM IPSUM 3': dummyString,
    'LOREM IPSUM 4': dummyString,
    'LOREM IPSUM 5': dummyString,
    'LOREM IPSUM 6': dummyString,
    'LOREM IPSUM 7': dummyString,
  };

  const [activeRow, setActiveRow] = useState(null);
  
  const generateTabs = useCallback((items) => {
    return Object.keys(items).map((item) => {
      return (
        <AccordionRow 
          id={item}
          text={items[item]}
          active={activeRow === item}
          setActiveRow={() => setActiveRow(item)} 
        />
      );
    });
  }, [activeRow])

  return (
    <div className="accordion-page" style={{ backgroundImage: "url(./images/background3.svg)"}}>
        <div className="accordion-description">
          <h1><b>NULLA IMPERDIET</b></h1>
          <p>Vestibulum dapibus hendrerit nibh ut ornare.</p>
          <h5>Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.</h5>
        </div> 
        <div className="content-panel">
          <div className="accordion">
            {generateTabs(accordionContent)}
          </div>
        </div>
    </div>
  );
};

export default AccordionPage;