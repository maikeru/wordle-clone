import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { snapToLength } from "../../utils";

function GuessResults({ guesses, answer }) {
  const guessRows = snapToLength(guesses, NUM_OF_GUESSES_ALLOWED);
  console.log({ guesses, guessRows });
  return (
    <div className="guess-results">
      {guessRows.map((guess, index) => (
        <Guess key={index} className="guess" guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
