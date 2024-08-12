import React from 'react';



function Navbar(){
    return(
        <>
        
        <nav>
            <div className="left">
           <Buttons btnName={"Home"}  /> 
           <Buttons btnName={"Contact Us"}  /> 
           <Buttons btnName={"About Us"}  /> 
            </div>
            <div className="right">
           <Buttons btnName={"More"} />
            </div>
           
        </nav>


        </>
    );
};


function Buttons({btnName , btnFunc}){
    
    return (
        <>
        <button onClick={ (e)=>{ alert(`${e.target.innerText} Button is Clicked. follow @pgxmsm` ); } } >{btnName}</button>
        </> 
    );
};




export default Navbar;