import React, { useState } from 'react';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const maxTitleLength = 50;

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote({ title, body });
        setTitle('');
        setBody('');
    };

    return (
        <div className="note-input">
            <form onSubmit={handleSubmit}>
                <h1 className="note__title">Buat Catatan</h1>
                <p className="note-input__title__char-limit">
                    Sisa karakter: {maxTitleLength - title.length}
                </p>
                <input
                    type="text"
                    className="note-input__title"
                    placeholder="Ini adalah judul ..."
                    maxLength={maxTitleLength}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="note-input__body"
                    placeholder="Tuliskan catatanmu di sini ..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    );
}

export default NoteForm;
