import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NoteList from './NoteList';
import CreateNote from './CreateNote';
import NoteDetail from './NoteDetail';

function App() {
    const [notes, setNotes] = useState([]);

    // Load notes from local storage on page load
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    // Save notes to local storage whenever the notes list changes
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <Router>
            <div className="App">
                <nav className="bg-indigo-600 p-4">
                    <div className="container mx-auto flex justify-between">
                        <Link to="/" className="text-white text-lg font-semibold">Note Manager</Link>
                        <Link to="/create" className="text-white text-lg">Create New Note</Link>
                    </div>
                </nav>
                <div className="container mx-auto mt-6">
                    <Routes>
                        <Route path="/" element={<NoteList notes={notes} />} />
                        <Route path="/create" element={<CreateNote addNote={addNote} />} />
                        <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
