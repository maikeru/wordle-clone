import React from "react";
import KeyboardRow from "../KeyboardRow";

const initialKeyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ letterStates }) {
  return (
    <div className="keyboard">
      {initialKeyboard.map((row, index) => (
        <KeyboardRow
          key={index}
          keys={row}
          index={index}
          letterStates={letterStates}
        />
      ))}
    </div>
  );
}

export default Keyboard;
