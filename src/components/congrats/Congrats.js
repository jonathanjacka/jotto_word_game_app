import React from 'react';
import PropTypes from 'prop-types'; 


/**
 * Functional react component for congrats message
 * @function
 * @param {object} props  - react props
 * @returns {JSX.Element} - rendered component or 'null' if success prop is false
 */

export const Congrats = ( { success } ) => {

        if(success){
            return(
                <div data-test='component-congrats'>
                    <span data-test='congrats-message'>Well done, you guessed the word!</span>
                </div>
            )
        }else{
            return(
                <div data-test='component-congrats'></div>
            )
        }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}