/**
 * Functional react component for congrats message
 * @function
 * @param {object} props  - react props
 * @returns {JSX.Element} - rendered component or 'null' if success prop is false
 */

import React from 'react';

export const Congrats = ( { success } ) => {


    return (
        <div data-test='component-congrats'>Congrats!</div>
    );
}