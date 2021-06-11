/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - word the user guesses
 * @param {string} secretWord - word that is trying to be identified
 * @returns {number} - Number of letters matched between guessedWord and secretWord
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
    
    let count = 0;
    const obj = secretWord.split("");
    for(let str of guessedWord){
      let idx = obj.findIndex(s => s === str);
      if(idx >= 0){
        count++;
        obj.splice(idx, 1);
      }
    }
    return count;
  }