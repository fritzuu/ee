import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from './NoteList';
import NoteDetail from './NoteDetail';
import CreateNote from './CreateNote';

function App() {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Load notes from localStorage when the app starts
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    // Function to add a new note
    const addNote = (newNote) => {
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Persist notes in localStorage
    };

    // Filter notes based on search term
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Router>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Note Manager</h1>

                {/* Search bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Routes for different pages */}
                <Routes>
                    <Route
                        path="/"
                        element={<NoteList notes={filteredNotes} />}
                    />
                    <Route
                        path="/note/:id"
                        element={<NoteDetail />}
                    />
                    <Route
                        path="/create"
                        element={<CreateNote addNote={addNote} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
