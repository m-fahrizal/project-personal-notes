import React, { useState } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getInitialData } from './utils/index';
import './styles/style.css';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState(''); 

  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    note.body.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setSearchKeyword} /> 
      <div className="note-app__body">
        <NoteForm addNote={addNote} />

        <h2>Catatan Aktif</h2>
        <NoteList 
          notes={filteredNotes.filter((note) => !note.archived)} 
          onDelete={deleteNote} 
          onToggleArchive={toggleArchiveNote} 
        />

        <h2>Arsip</h2>
        <NoteList 
          notes={filteredNotes.filter((note) => note.archived)} 
          onDelete={deleteNote} 
          onToggleArchive={toggleArchiveNote} 
        />
      </div>
    </div>
  );
}

export default App;
