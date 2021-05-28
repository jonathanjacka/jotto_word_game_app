import React from 'react';
import PropTypes from 'prop-types';

export const GuessedWords = (props) => {

    let contents;

    if(props.guessedWords.length === 0){
        contents = 'Try to guess the correct word!';
    }else{

        const guessedWordRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));

        contents = (
            <div data-test="guessed-words">
                <h3>Guesses Word</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordRows}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div data-test="component-guessed-words">
            <span data-test="component-guess-instructions">{contents}</span>
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}