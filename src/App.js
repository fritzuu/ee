import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import NoteList from './NoteList';
import CreateNote from './CreateNote';
import NoteDetail from './NoteDetail';

function App() {
    const [notes, setNotes] = useState([]);
    const location = useLocation(); // Get the current route location

    // Load notes from localStorage
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    // Save notes to localStorage whenever notes change
    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-indigo-600 text-white rounded-md mb-6 shadow-md">
                <div className="flex items-center">
                    <h1 className="text-2xl font-semibold">Note Manager</h1>
                </div>
                <div className="flex space-x-4">
                    {/* Always render "Home" and "Create Note" buttons */}
                    <Link to="/" className="text-white hover:bg-indigo-700 px-4 py-2 rounded-md">
                        Home
                    </Link>
                    {location.pathname !== '/create' && (
                        <Link to="/create" className="text-white hover:bg-indigo-700 px-4 py-2 rounded-md">Create Note</Link>
                    )}
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<NoteList notes={notes} />} />
                <Route path="/create" element={<CreateNote addNote={addNote} />} />
                <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
            </Routes>
        </div>
    );
}

export default App;
