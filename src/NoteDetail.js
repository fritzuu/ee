import React from 'react';
import { useParams, Link } from 'react-router-dom';

function NoteDetail() {
    const { id } = useParams();
    const notes = JSON.parse(localStorage.getItem('notes'));
    const note = notes ? notes.find((note) => note.id === id) : null;

    if (!note) {
        return (
            <div className="max-w-3xl mx-auto p-4">
                <p className="text-center text-red-500">Note not found</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <Link
                to="/"
                className="inline-block text-indigo-600 hover:text-indigo-800 mb-4"
            >
                &lt; Back to Notes
            </Link>
            <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">{note.title}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">
                Created on: {note.date}
            </p>
            <div className="prose text-gray-800">
                <p>{note.content}</p>
            </div>
        </div>
    );
}

export default NoteDetail;
