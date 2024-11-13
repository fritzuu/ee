import React from 'react';
import { useParams, Link } from 'react-router-dom';

function NoteDetail({ notes }) {
    const { id } = useParams();
    const note = notes.find(n => n.id === parseInt(id));

    if (!note) {
        return (
            <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
                <p className="text-center text-red-500">Note not found</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">{note.title}</h2>
            <p className="text-gray-600">{note.content}</p>
            <div className="mt-6">
                <Link to="/" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Back to Notes</Link>
            </div>
        </div>
    );
}

export default NoteDetail;
