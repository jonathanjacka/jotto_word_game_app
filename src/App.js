import './App.css';

import { Congrats } from './components/congrats/Congrats.js';
import { GuessedWords } from './components/guessedWords/GuessedWords.js';

function App() {

  const guessedWords = [
    {guessedWord: 'train', letterMatchCount: 3},
    {guessedWord: 'agile', letterMatchCount: 1},
    {guessedWord: 'party', letterMatchCount: 5},
  ];

  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
