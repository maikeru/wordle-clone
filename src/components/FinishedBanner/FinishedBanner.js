import React from "react";

function HappyBanner({ guessCount }) {
  console.log({ guessCount });
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessCount} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function FinishedBanner({ guessCount, answer, hasWon }) {
  console.log("FinishedBanner", { guessCount });
  return hasWon ? (
    <HappyBanner guessCount={guessCount} />
  ) : (
    <SadBanner answer={answer} />
  );
}

export default FinishedBanner;
