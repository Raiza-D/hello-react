import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { reset } = props;

  const handleClick = () => {
    reset();
  }

  const text = "Reset";

  return (
    <button className="resetButton" onClick={handleClick}>
      <span>{text}</span>
    </button>
  )
};

const Application = () => {

  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input
        placeholder="Type your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button reset={reset} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
