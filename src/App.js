import React from "react";

function App() {
  const Greeting = ({ name }) => {
    return <h1>Привіт, {name}!</h1>;
  };

  const Message = ({ text }) => {
    return <p>{text}</p>;
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо до нашого додатку!" />
    </div>
  );
}

export default App;
