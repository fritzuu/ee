import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NoteList({ notes }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Your Notes</h2>

            {/* Create New Note Button above the search */}
            <Link to="/create" className="bg-indigo-500 text-white px-4 py-2 rounded-md mb-4 block text-center hover:bg-indigo-600">
                Create New Note
            </Link>

            {/* Search input */}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search notes..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
            />

            {/* List of notes */}
            <div>
                {filteredNotes.length === 0 ? (
                    <p className="text-center text-gray-500">No notes found</p>
                ) : (
                    <ul>
                        {filteredNotes.map((note) => (
                            <li key={note.id} className="mb-4 p-4 border-b border-gray-300 rounded-md">
                                <Link to={`/note/${note.id}`} className="text-xl font-semibold text-indigo-600">
                                    {note.title}
                                </Link>
                                <p className="mt-2 text-gray-600">{note.content.substring(0, 100)}...</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default NoteList;
