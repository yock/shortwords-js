import React from 'react';
import { words } from '../data/words.json';

const WordList = () => (
  <ul className="wordlist">
    {words.map(word => <li className="wordlist__word" key={word}>{word}</li>)}
  </ul>
);

export default WordList;
