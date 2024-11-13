import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNote({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            const newNote = {
                id: Date.now(),
                title: title,
                content: content,
            };
            addNote(newNote);
            navigate('/');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create New Note</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
                    rows="5"
                />
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                    Save Note
                </button>
            </form>
        </div>
    );
}

export default CreateNote;
