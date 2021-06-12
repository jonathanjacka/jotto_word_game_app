/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - word the user guesses
 * @param {string} secretWord - word that is trying to be identified
 * @returns {number} - Number of letters matched between guessedWord and secretWord
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
    
    let count = 0;
    const obj = secretWord.split("");
    for(let char of guessedWord){
      let idx = obj.findIndex(i => i === char);
      if(idx >= 0){
        count++;
        obj.splice(idx, 1);
      }
    }
    return count;

    // const secretLetters = secretWord.split('');
    // const guessedLetterSet = new Set(guessedWord);
    //return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
  }