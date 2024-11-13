import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

function App() {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) setNotes(storedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (noteText) => {
        const newNote = { id: Date.now(), text: noteText };
        setNotes([...notes, newNote]);  // Add new note to the notes array
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id)); // Delete note by id
    };

    return (
        <div>
            <h1>Note Manager</h1>
            <NoteForm onAddNote={addNote} /> {/* Pass the addNote function to NoteForm */}
            <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <NoteList
                notes={notes.filter(note => note.text.toLowerCase().includes(searchTerm.toLowerCase()))}
                deleteNote={deleteNote}
            />
        </div>
    );
}

export default App;
