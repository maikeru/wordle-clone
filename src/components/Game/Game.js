import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import FinishedBanner from "../FinishedBanner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [hasWon, setHasWon] = React.useState(false);
  const [letterStates, setLetterStates] = React.useState({});

  React.useEffect(() => {
    setLetterStates(generateLetterStates(guesses, answer));
  }, [guesses]);

  const submitGuess = (guess) => {
    console.log({ guesses, guess, length: guesses.length });
    setGuesses([...guesses, guess]);
    if (guessIsCorrect(guess, answer)) {
      setHasWon(true);
      setFinished(true);
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setFinished(true);
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {!finished && <GuessInput submitGuess={submitGuess} />}
      {finished && (
        <FinishedBanner
          guessCount={guesses.length}
          hasWon={hasWon}
          answer={answer}
        />
      )}
      <Keyboard letterStates={letterStates} guesses={guesses} answer={answer} />
    </>
  );
}

function guessIsCorrect(guess, answer) {
  return checkGuess(guess, answer).every((cell) => cell.status === "correct");
}

function generateLetterStates(guesses, answer) {
  const checkedGuesses = (guesses ?? []).map((guess) =>
    checkGuess(guess, answer)
  );
  const letterStates = {};
  checkedGuesses.forEach((row) =>
    row.forEach((guess) => {
      if (!guess) return;
      // Always set state if we don't already have one
      if (!letterStates[guess.letter]) {
        letterStates[guess.letter] = guess.status;
      }
      // always prefer correct state
      if (guess.status === "correct") {
        letterStates[guess.letter] = guess.status;
        return;
      }

      if (
        guess.status === "misplaced" &&
        letterStates[guess.letter] !== "correct"
      ) {
        letterStates[guess.letter] = guess.status;
      }
    })
  );
  console.log({ checkedGuesses, letterStates });
  return letterStates;
}

export default Game;
