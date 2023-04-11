import React from "react";

function GuessInput({ submitGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleInput = (e) => {
    const newGuess = (e.target.value ?? "").toUpperCase();
    setGuess(newGuess);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    if (typeof submitGuess === "function") {
      submitGuess(guess);
    }
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={handleInput}
        value={guess}
        pattern="\w{5,5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
