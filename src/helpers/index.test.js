import { getLetterMatchCount  } from "./index.js";

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    //returns correct count when there are no matching letters
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });

    //returns the correct count when there are some matching letters
    test('returns the correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    //returns the correct count when their are duplicate letters in guess word
    test('returns the correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('return the correct count when there are duplicate letters in the secret word', () => {
        const letterMatchCount = getLetterMatchCount('robby', 'bobby');
        expect(letterMatchCount).toBe(4);
    });
});

