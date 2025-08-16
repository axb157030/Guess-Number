import React, { useEffect, useRef, useState } from 'react';
import NumberInput from './components/NumberInput.tsx';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'; // for full-screen confetti

export function App() {
  const [guess, setGuess] = useState(0);
  const [statement, setStatement] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); // 🎯 Track if user guessed correctly
  const [randNum] = useState(() => Math.floor(Math.random() * 3000) + 1);
  const hasUserStartedGuessing = useRef(false);

  const [width, height] = useWindowSize(); // to size the confetti

  useEffect(() => {
    if (guess === 0 && !hasUserStartedGuessing.current) return;

    hasUserStartedGuessing.current = true;
    GiveHint(randNum, guess, setStatement, setIsCorrect);
  }, [guess, randNum]);

  return (
    <div>
      <h1>Guess the number</h1>

      <div className="card">
        <NumberInput value={guess.toString()} onChange={val => setGuess(Number(val))} />
      </div>

      <p className="read-the-docs">{statement}</p>

      {isCorrect && <Confetti width={width} height={height} />}
    </div>
  );
}

function GiveHint(
  randNum: number,
  guess: number,
  setStatement: React.Dispatch<React.SetStateAction<string>>,
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>
) {
    console.log("Random Number: " + randNum);
  if (guess > randNum * 2 && guess < randNum + 10) {
    setStatement("You are way past the number");
    setIsCorrect(false);
  } else if (guess < randNum / 2 && guess < randNum + 10) {
    setStatement("You are way less than the number");
    setIsCorrect(false);
  } else if (guess > randNum) {
    setStatement("Over the number");
    setIsCorrect(false);
  } else if (guess < randNum) {
    setStatement("Less than the number");
    setIsCorrect(false);
  } else {
    setStatement("🎉 You guessed it!");
    setIsCorrect(true);
  }
}
