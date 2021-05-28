import React from 'react';
import PropTypes from 'prop-types';

export const GuessedWords = (props) => {

    return (
        <div data-test="component-guessedWords" >GuessedWords</div>
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