import { useEffect, useState } from "react";

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
  guessLetter: string[];
  setGusssLetter: React.Dispatch<React.SetStateAction<string[]>>;
  word: string;
  correctLetter: string[];
  setCorrectLetter: React.Dispatch<React.SetStateAction<string[]>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setIncorrectNum: React.Dispatch<React.SetStateAction<number>>;
};

const KeyCal = ({
  guessLetter,
  setGusssLetter,
  word,
  correctLetter,
  setCorrectLetter,
  gameOver,
  setGameOver,
  setIncorrectNum,
}: KeyCalProps) => {
  const answer = word.toUpperCase().split("");
  const [spell, setSpell] = useState<string>("");

  console.log(answer);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;

    setSpell(button.name);
    setGusssLetter((prevGuesses) => [...prevGuesses, button.name]);
   

  };

  //console.log(guessLetter)
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
                color: "blue",
                visibility: correctLetter.includes(item) ? "visible" : "hidden",
              }}
            >
              {item}
            </span>
            <span
              style={{ borderBottom: "5px solid blue ", minWidth: "40px" }}
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
    </div>
  
  );
};

export default KeyCal;
