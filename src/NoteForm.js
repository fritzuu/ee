import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.trim()) {
            onAddNote(note); // Call the onAddNote function passed from App.js
            setNote(''); // Clear the input after submission
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
}

export default NoteForm;
