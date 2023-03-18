import React, { useEffect, useState } from "react";
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
  const [incorrectNum, setIncorrectNum] = useState(0);

  return (
    <div
      className="snowApp"
      style={{
        width: "100vW",
        height: "100vH",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        backgroundImage:
          "url('https://media.istockphoto.com/id/1180480242/vector/winter-background-with-snow.jpg?s=612x612&w=0&k=20&c=1hca-asOJI_slNiFu2bZl2z-oSv6DZG3uuhUlOg-FVo=')",
      }}
    >
      <h2>"Don't let the snowman melt! Let's spell the word!"</h2>
      <SnowManDrawing incorrectNum={incorrectNum} />
      <KeyCal word={word} setIncorrectNum={setIncorrectNum} />
    </div>
  );
}

export default App;
