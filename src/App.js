import { useState } from 'react';
import './App.css';

import { Congrats } from './components/congrats/Congrats.js';
import { GuessedWords } from './components/guessedWords/GuessedWords.js';
import { Input } from './components/input/input.js';

function App() {

  const [secretWord, setSecretWord] = useState('party');

  const [guessedWords, setGuessedWords ] = useState(
    [
      {guessedWord: 'train', letterMatchCount: 3},
      {guessedWord: 'agile', letterMatchCount: 1},
      {guessedWord: 'parti', letterMatchCount: 4}
    ]
  );

  const updateGuessedWords = (currentGuess) => {
    
    let word = currentGuess;
    let count = 0;

    for(let letter of secretWord) {
      for(let i in currentGuess) {
        if(currentGuess(i) === letter){
          count++;
          currentGuess.replace(currentGuess[i], '');
          continue;
        }
      }
    }
    setGuessedWords((prev) => [...prev, {guessedWord: word, letterMatchCount: count}]);
  }

  const [success, setSuccess] = useState(false);
  const updateSuccess = (currentGuess) => (currentGuess === secretWord ? setSuccess(true) : setSuccess(false));


  return (
    <div className="App container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={guessedWords} />
      <Input 
        guessedWords={guessedWords} 
        success={false} 
        secretWord={secretWord}
      />
    </div>
  );
}

export default App;
