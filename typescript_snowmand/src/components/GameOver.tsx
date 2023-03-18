import React from "react";

type gameOverProps = {
  word: string;
  gameOver: boolean;
  correctLetter: string[];
};

const GameOver = ({ word, gameOver, correctLetter }: gameOverProps) => {
  const renderEndScreen = (msg: string) => (
    <div
      className="endScreen"
      style={{
        position: "absolute",
        zIndex: "101",
        margin: "100 auto",
        backgroundColor: "pink",
        top: "300px",
        right: "35%",
      }}
    >
      <div
        className="endScreenContent"
        style={{
          width: "400px",
          height: "200px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2> {msg} </h2>
        <h3>
          Answer: <span style={{ color: "red" }}>{word}</span>
        </h3>
        <button onClick={() => window.location.reload()}>Replay</button>
      </div>
    </div>
  );

  return (
    <div>
      {gameOver && renderEndScreen("Game over")}
      {[...new Set(word)].join("") === correctLetter.join("") &&
        renderEndScreen("👍congratulations! WIN✨")}
    </div>
  );
};
export default GameOver;
