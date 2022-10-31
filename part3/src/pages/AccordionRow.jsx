import React from "react";

const AccordionRow = (props) => {
  const { id, text, active, setActiveRow } = props;

  return (
    <div className="accordion-row">
      <div 
        className={`accordion-header ${(active) ? 'active': ''}`}
        onClick={() => setActiveRow()}
      >
        <h3>{id}</h3>
        <img className="accordion-logo" src={active ? "./images/up.svg" : "./images/down.svg"}/>
      </div>
      <div className="accordion-content" style={!active ? {display: "none"} : {}}>   
          {text}
      </div>
    </div>
    
  );
}

export default AccordionRow;
