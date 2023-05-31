import { useState } from "react";
import { userss } from "../view/data";
import View from "../view/View";


//______________________ FUNCTION MAiN_______________________
export function Counter() {
  const [count, setCount] = useState(0);
      

const [colorRed, setColorRed] = useState();
const [colorGreen, setColorGreen] = useState();

//______________________ FUNCTION BTN COLOR ONE_______________________
  function onChangeButtonColorOne() {
    setCount(count + 1);
    setColorRed("red");
  }
//______________________ FUNCTION BTN COLOR TWO___________________________
  function onChangeButtonColorTwo() {
    // setCount(count - 1);
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Нельзя! Дальше идут отрицательные числа.");
    }
    setColorGreen("green");
  }

//______________________ FUNCTION RESET_______________________  
  function reset() {
    setColorRed("");
    setColorGreen("");
    setCount(0);
  }
  /////////////////////////////////////////////////////////////////////////RETURN
  return (
    <div className="mt-10 border-2 border-black py-5 pb-5">
      <h1 className="text-center mb-4 text-2xl">
        <a className="border-green-400 px-3 py-2 font-bold border-4">{count}</a>
      </h1>
      <div className="flex gap-2 justify-center items-center">
        <button
          className="border-2 border-black px-3 "
          style={{ backgroundColor: colorRed }}
          onClick={onChangeButtonColorOne}
        >
          Click me +
        </button>
        <button
          className="border-2 border-black px-3"
          style={{ backgroundColor: colorGreen }}
          onClick={onChangeButtonColorTwo}
        >
          Click me -
        </button>
        <button className="border-2 border-black px-3" onClick={reset}>
          Reset
        </button>
      </div>
      </div>
  );

}
