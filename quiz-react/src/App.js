import React from "react";

const App = props => {
  const greet1 = "Hello, you are a friend";
  const greet2 = "Goodbye, you are the worst";
  return (
    <div>
      <h1>{props.greeting === "friend" ? greet1 : greet2}</h1>
    </div>
  );
};

export default App;
