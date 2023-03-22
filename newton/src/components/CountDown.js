import React, { useState, useEffect } from "react";

function CountDown() {
  const [count, setCount] = useState(0);
  const [isEffectTriggered, setIsEffectTriggered] = useState(false);

  useEffect(() => {
    setIsEffectTriggered(true);
  }, [count]);

  
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>MyComponent</h1>
      <p>You clicked <span id="count"> {count}</span> times</p>
      <button onClick={handleClick} id="button">Click me</button>
      <p>{isEffectTriggered ? "Effect triggered" : "Effect not triggered"}</p>
    </div>
  );
}

export default CountDown;
