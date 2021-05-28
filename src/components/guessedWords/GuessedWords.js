import React from 'react';
import PropTypes from 'prop-types';

export const GuessedWords = (props) => {

    let contents;

    if(props.guessedWords.length === 0){
        contents = 'Try to guess the correct word!';
    }else{
        contents = (
            <div data-test="guessed-words">
                <h3>Guesses so far</h3>
                {props.guessedWords.map((item, index) => <div key={index} data-test="guessed-word">{item}</div>)}
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