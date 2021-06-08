import React from 'react';
import Proptypes from 'prop-types';

export const Input = ({ secretWord }) => {

    return (
        <div data-test="component-input"></div>
    )   
}

Input.propTypes = {
    secretWord: Proptypes.string.isRequired
}
