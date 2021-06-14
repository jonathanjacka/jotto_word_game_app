import { useState } from 'react';
import './App.css';

import { Congrats } from '../components/congrats/Congrats.js';
import { GuessedWords } from '../components/guessedWords/GuessedWords.js';
import { Input } from '../components/input/input.js';

function App() {
  const [secretWord, setSecretWord] = useState('party');

  const [guessedWords, setGuessedWords] = useState([]);

  const [success, setSuccess] = useState(false);
  const updateSuccess = (currentGuess) =>
    currentGuess === secretWord ? setSuccess(true) : setSuccess(false);

  return (
    <div className='App container' data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
      <Input success={success} secretWord={secretWord} />
    </div>
  );
}

export default App;
