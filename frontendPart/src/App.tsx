import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log('Title:', e.target.value); // Print title in console
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="flex flex-col">
    
      <input
        type="text"
        placeholder="Enter title"
        className="border border-black w-2/12 p-2 m-2"
        onChange={handleTitleChange} 
      />

     
      <input
        type="text"
        placeholder="Enter description"
        className="border border-black w-2/12 p-2 m-2"
        onChange={handleDescriptionChange} 
      />
    </div>
  );
}

export default App;
