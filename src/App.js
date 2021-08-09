import React, { useState, useEffect } from 'react';
import Header from './Component/Header'
import Figure from './Component/Figure';
import WrongLetters from './Component/WrongLetters';
import Word from './Component/Words';
import Popup from './Component/Popup';
import Notification from './Component/Notification';
import Help from './Component/Help';
import { showNotification as show, checkWin } from './Component/helpers';
import './App.css';
//Declare global varaibles
const words = ['world', 'hello', 'arrays', 'nolands'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //Local varaibles
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      //Using unicode to check if letters is between certain area
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        //Looking if word contain that letter
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            //If letter is already used
            show(setShowNotification);
          }
        } else {
          //Not having letter inside word
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //Asking user if want to play again
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    //Putting out a random word to user
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
     
    </>
  );
}

export default App;