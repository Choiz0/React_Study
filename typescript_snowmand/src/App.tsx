import { useEffect, useState } from "react";
import "./App.css";
import SnowManDrawing from "./components/SnowManDrawing";
import KeyCal from "./components/KeyCal";

const wordList = [
  "banana",
  "flower",
  "turtle",
  "rabbit",
  "tiger",
  "monkey",
  "dolphin",
  "zebra",
  "elephant",
  "hippo",
  "giraffe",
  "kangaroo",
  "pumpkin",
  "rainbow",
  "snowman",
  "butterfly",
  "dragonfly",
  "ladybug",
  "octopus",
  "seahorse",
  "dinosaur",
  "caterpillar",
  "crocodile",
  "rhinoceros",
  "scorpion",
  "spider",
  "squid",
  "starfish",
  "sunflower",
  "watermelon",
  "whale",
  "butter",
  "sandwich",
  "ketchup",
  "lollipop",
  "chocolate",
  "hamburger",
  "pizza",
  "icecream",
  "penguin",
  "guitar",
  "violin",
  "cello",
  "trumpet",
  "piano",
  "keyboard",
  "furniture",
  "television",
  "computer",
  "backpack",
  "library",
  "bicycle",
  "skateboard",
  "soccer",
  "baseball",
  "basketball",
  "football",
  "hockey",
  "swimming",
  "tennis",
  "pingpong",
  "taekwondo",
  "chimpanzee",
  "koala",
  "kangaroo",
];

function App() {
  const [word, setWord] = useState(
    wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
  );
  const [guessLetter, setGuessLetter] = useState<string[]>([]);
  const [correctLetter, setCorrectLetter] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [incorrectNum, setIncorrectNum] = useState(0);

  useEffect(() => {}, [gameOver]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
      }}
    >
      <h2>"Don't let the snowman melt! Let's spell the word!"</h2>
      <SnowManDrawing incorrectNum={incorrectNum}  setIncorrectNum={setIncorrectNum}/>
      <KeyCal
        guessLetter={guessLetter}
        setGusssLetter={setGuessLetter}
        word={word}
        correctLetter={correctLetter}
        setCorrectLetter={setCorrectLetter}
        setIncorrectNum={setIncorrectNum}
        setGameOver={setGameOver}
        gameOver={gameOver}
      />

      {gameOver && (
        <div
          className="endScreen"
          style={{
            position: "absolute",
            zIndex: "101",
            margin: "100 auto",
            backgroundColor: "pink",
            top: "200px",
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
            <h1>Game over </h1>
            <h3>
              Answer: <span style={{ color: "red" }}>{word}</span>
            </h3>
            <button onClick={() => window.location.reload()}>Replay</button>
          </div>
        </div>
      )}

      {[...new Set(word)].join("") === correctLetter.join("") ? (
        <div
          className="endScreen"
          style={{
            position: "absolute",
            zIndex: "101",
            margin: "100 auto",
            backgroundColor: "pink",
            top: "200px",
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
            <h2>👍congratulations! WIN✨ </h2>
            <h3>
              Answer: <span style={{ color: "red" }}>{word}</span>
            </h3>
            <button onClick={() => window.location.reload()}>Replay</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
