import React from 'react';

function NoteSearch({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input 
        type="text" 
        placeholder="Cari catatan ..." 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default NoteSearch;
