import React from "react";

const indexToRow = {
  0: "one",
  1: "two",
  2: "three",
};

function KeyboardRow({ keys, index, letterStates }) {
  console.log("KeyboardRow", { keys, index, letterStates });
  return (
    <div className={`keyRow ${indexToRow[index]}`}>
      {keys.map((key, index) => (
        <span key={index} className={`key ${letterStates[key] ?? ""}`}>
          {key}
        </span>
      ))}
    </div>
  );
}

export default KeyboardRow;
