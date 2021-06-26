import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import { useEffect } from 'react';
import { Congrats } from '../components/congrats/Congrats.js';
import { GuessedWords } from '../components/guessedWords/GuessedWords.js';
import { Input } from '../components/input/input.js';
import { getSecretWord } from '../actions';

function App() {
  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);

  const [secretWord, setSecretWord] = useState('party');

  useEffect(() => {
    getSecretWord();
  }, []);

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
