import React from 'react';
import PropTypes from 'prop-types';

export const GuessedWords = (props) => {

    let contents;

    if(props.GuessedWords.length === 0){
        contents = 'Try to guess the correct word!';
    }
    
    return (
        <div data-test="component-guessed-words">
            <span data-test="component-guess-instructions">{contents}</span>
        </div>
    );
}

GuessedWords.propTypes = {
    GuessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            GuessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}