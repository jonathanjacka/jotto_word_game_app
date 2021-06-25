import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');
  const success = useSelector((state) => state.success);

  const handleSubmit = (event) => {
    event.preventDefault();

    //add currentGuess to guessedWords Array

    // if (currentGuess === secretWord) {
    //   //update success
    //   success = true;
    // }

    setCurrentGuess('');
  };

  if (success) {
    return <div data-test='component-input'></div>;
  }

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='Enter guess'
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: Proptypes.string.isRequired,
};
