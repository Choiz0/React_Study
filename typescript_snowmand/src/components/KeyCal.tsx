import { useEffect, useState } from "react";
import GameOver from './GameOver';

const Alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type KeyCalProps = {
 
  word: string;
  setIncorrectNum: React.Dispatch<React.SetStateAction<number>>;
};

const KeyCal = ({
  word,
  setIncorrectNum,
}: KeyCalProps) => {
  const [guessLetter, setGuessLetter] = useState<string[]>([]);
  const [correctLetter, setCorrectLetter] = useState<string[]>([]);
  const answer = word.toUpperCase().split("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [spell, setSpell] = useState<string>("");

  console.log(answer);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;

    setSpell(button.name);
    setGuessLetter((prevGuesses) => [...prevGuesses, button.name]);
   

  };


  useEffect(() => {
    const incorrectNum = guessLetter.filter((letter) => !answer.includes(letter)).length;
  setIncorrectNum(incorrectNum ===0?1 : incorrectNum+1);
    if (guessLetter.length - correctLetter.length == 8 ) {
      setGameOver(true);
      setIncorrectNum(9)
    }
    if (
      spell !== "" &&
      answer.includes(spell) &&
      !correctLetter.includes(spell)
    ) {
      setCorrectLetter([...correctLetter, spell]);
    }

  
  }, [spell,guessLetter]);
  console.log(guessLetter.length - correctLetter.length)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: "800px",
        alignItems: "center",
        justifyContent: "center",
      
      }}
    >
      <div
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
      
        }}
      >
        {answer.map((item, idx) => (
          <div key={idx} style={{ display: "flex", flexDirection: "column", }}>
            <span
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#646cff",
                visibility: correctLetter.includes(item) ? "visible" : "hidden",
              }}
            >
              {item}
            </span>
            <span
              style={{ borderBottom: "5px solid  #646cff ", minWidth: "40px" }}
            ></span>
          </div>
        ))}
      </div>
    
      {Alphabet.map((letter) => {
        return (
          <button
            key={letter}
            name={letter}
            onClick={handleClick}
            disabled={correctLetter.includes(letter) || gameOver}
            className={correctLetter.includes(letter) || gameOver ? "inactive" : "active"}
          >
            {letter}
          </button>
        );
      })}
      <GameOver word={word} gameOver={gameOver} correctLetter={correctLetter}/>
    </div>
  
  );
};

export default KeyCal;
