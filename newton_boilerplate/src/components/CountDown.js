import React, { useState } from "react";
/* create an app using useEffect such that the count increases on each click and display the count
NOTE: Take initial count to be zero */ 
function CountDown() {
  /*Write your functions here */
  return (
    <div>
      
      <h1>MyComponent</h1>
      <p>You clicked <span id="count">
        {/* Display the count here */}
         </span> times</p>
      <button onClick={handleClick} id="button">Click me</button>
      <p>{isEffectTriggered ? "Effect triggered" : "Effect not triggered"}</p>
    </div>
  );
}
/*NOTE: Do not delete the id from the elements*/
export default CountDown;
