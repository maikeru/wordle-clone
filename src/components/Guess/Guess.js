import React from "react";
import { range, snapToLength } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

const emptyCells = range(WORD_LENGTH).map((_) => ({
  letter: "",
  status: null,
}));

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);
  console.log({ checkedGuess });
  const cells = checkedGuess ?? emptyCells;

  return (
    <p className="guess">
      {cells.map((cell, index) => {
        const className = `cell ${cell.status ?? ""}`;
        return (
          <span className={className} key={index}>
            {cell.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
