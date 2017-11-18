import React from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

const WordList = ({ words }) => (
  <ul className="wordlist">
    {words.map(word => (
      <li key={word}>
        <Word text={word} />
      </li>
    ))}
  </ul>
);

WordList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WordList;
