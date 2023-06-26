import React, {useState} from "react";


function Toggle() {

// const [text, setText] = useState("OFF")

// function changeButton(){
//   if (text === "OFF"){
//     setText("ON")
//   } else {
//     setText("OFF")
//   }
// }

const [isOn, setIsOn] = useState(false);

function handleClick() {
  setIsOn((isOn) => !isOn);
}

const color = isOn ? "red" : "white";

 return <button style={{background: color}}onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>

  // return <button onClick={changeButton}>{text}</button>;
}

export default Toggle;
