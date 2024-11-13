import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
    const [note, setNote] = useState({ title: '', content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.title.trim() && note.content.trim()) {
            onAddNote(note);
            setNote({ title: '', content: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create a New Note</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                    placeholder="Write your note..."
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="4"
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Add Note
                </button>
            </div>
        </form>
    );
}

export default NoteForm;
