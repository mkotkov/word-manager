import React, { useState } from 'react';

const AddWordForm = ({ addWord }) => {
  const [word, setWord] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (word) {
      addWord(word);
      setWord('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter word"
      />
      <button type="submit">Add Word</button>
    </form>
  );
};

export default AddWordForm;