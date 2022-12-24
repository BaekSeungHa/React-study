import { useState } from "react";
import "./App.css";

function Input() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const onReset = () => {
    setText("");
  };

  return (
    <div className="App">
      <input onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <div>값: {text}</div>
    </div>
  );
}

export default Input;
