import React from 'react';
import { useState } from 'react';

function Game(){

    const [input, setInput] = useState("");

    let nums =  [
        { label: "7", type: "number" },
        { label: "8", type: "number" },
        { label: "9", type: "number" },
        
        { label: "4", type: "number" },
        { label: "5", type: "number" },
        { label: "6", type: "number" },
        
        { label: "1", type: "number" },
        { label: "2", type: "number" },
        { label: "3", type: "number" },
        { label: "-", type: "operator" },
        { label: "0", type: "number" }, 
        { label: "+", type: "operator" },
        { label: "/", type: "operator" },
        
        { label: "*", type: "operator" },
        { label: ".", type: "decimal" },
        { label: "Remove", type: "clear" },
        { label: "=", type: "equals" },
        { label: "Clr", type: "clear" },
        
        
      ];

    // Handle button click events
    const handleButtonClick = (btns) => {
        if (btns.type === "equals") {
          calculateResult();
        }
    else if(btns.label ==="Remove"){
        setInput((prevInput) => prevInput.slice(0, -1))

    }
    else if(btns.label ==="Clr"){
        setInput((prevInput) => prevInput.slice(0, -100))

    }
        else {
          setInput((prevInput) => prevInput + btns.label);
        }
      };      
        // Handle keyboard input events
  const handleKeyDown = (event) => {
    const validKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "*",
      "/",
      ".",
      "Enter",
      "Backspace",
    ];
    console.log(event)

    if (validKeys.includes(event.key)) {
      event.preventDefault();
      if (event.key === "Enter") {
        calculateResult();
      } else if (event.key === "Backspace") {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else {
        setInput((prevInput) => prevInput + event.key);
      }
    }
  };

  // Calculate the result
  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error or Invalid Function");
    }
  };

    // };
    return(
        <>
        <div className="cal-container">
            <div className="output-screen">
                
             <input  type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}  
         /> 
                </div>

                <div className="btns-container">
        {
            nums.map( (btns , index)=> <NumBtns btnName={btns.label}  k={index}
            
            className={btns.type} onFunc={() => handleButtonClick(btns) } />)
        }
                

                {/* <NumBtns btnName={"remove"} onClick={()=> setItems([]) } /> */}
                </div>
        </div>
        </>
    );
};

function NumBtns({btnName, onFunc , className}, k){
    
 return   <button onClick={onFunc} className={className} key={k}  >{btnName}</button>

};

export default Game ;



