import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = () => {
    if (valueInput.trim()) setInputUser(valueInput.trim());
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') handleSubmit();
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-400 transition-colors"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shrink-0 cursor-pointer"
      >
        <SearchIcon fontSize="small" />
      </button>
    </div>
  );
};

export { Searcher };
