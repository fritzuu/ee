import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteDetail from './NoteDetail';

function App() {
    // State to store the notes
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Load notes from localStorage on initial load
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) setNotes(storedNotes); // If notes exist in localStorage, set them in state
    }, []);

    // Save notes to localStorage whenever the notes state changes
    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    // Function to add a new note
    const addNote = (noteContent) => {
        const newNote = {
            id: Date.now().toString(), // Unique ID for each note
            title: noteContent.title,
            content: noteContent.content,
            date: new Date().toLocaleString(),
        };
        setNotes([...notes, newNote]); // Add the new note to the notes state
    };

    // Function to delete a note
    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes); // Remove the deleted note from the state
    };

    // Filter notes based on search term
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Router>
            <div>
                <h1>Note Manager</h1>
                <NoteForm onAddNote={addNote} />
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<NoteList notes={filteredNotes} deleteNote={deleteNote} />}
                    />
                    <Route path="/note/:id" element={<NoteDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
