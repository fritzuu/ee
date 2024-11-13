import React from 'react';
import { Link } from 'react-router-dom';

function NoteList({ notes }) {
    return (
        <div className="space-y-4">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-indigo-700">{note.title}</h2>
                        <p className="text-sm text-gray-500">Created on: {note.date}</p>
                        <p className="text-gray-700">{note.content.slice(0, 100)}...</p>
                        <Link
                            to={`/note/${note.id}`}
                            className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block"
                        >
                            View Details
                        </Link>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No notes available</p>
            )}

            {/* Button to navigate to the Create Note page */}
            <div className="mt-6 text-center">
                <Link
                    to="/create"
                    className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
                >
                    Create New Note
                </Link>
            </div>
        </div>
    );
}

export default NoteList;
