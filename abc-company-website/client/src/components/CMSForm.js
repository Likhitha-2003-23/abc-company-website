import React, { useState } from 'react';
import api from '../api';

const CMSForm = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', { text });
      setMessage('Heading updated successfully');
    } catch {
      setMessage('Error updating heading');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input
        type="text"
        className="border p-2 w-full"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter new heading"
      />
      <button className="mt-2 p-2 bg-blue-500 text-white w-full" type="submit">
        Save Heading
      </button>
      {message && <p className="mt-2 text-green-500">{message}</p>}
    </form>
  );
};

export default CMSForm;