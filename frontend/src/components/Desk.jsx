import React, { useEffect, useState } from 'react';
import api from "../api.js";
import AddWordForm from './AddWordForm';

const Desk  = () => {
  const [desk, setDesk] = useState([]);

  const fetchWords = async () => {
    try {
      const response = await api.get('/desk');
      setDesk(response.data.desk);
    } catch (error) {
      console.error("Error fetching words", error);
    }
  };

  const addWord = async (word) => {
    try {
      await api.post('/desk', {  word: word  });
      fetchWords();  // Refresh the list after adding a word
    } catch (error) {
      console.error("Error adding word", error);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div>
      <h2>Words List</h2>
      <ul>
        {desk.map((desk, index) => (
          <li key={index}>{desk.word}</li>
        ))}
      </ul>
      <AddWordForm addWord={addWord} />
    </div>
  );
};

export default Desk;