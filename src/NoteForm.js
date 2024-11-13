import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onAddNote({ title, content }); // Send both title and content to App.js
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
}

export default NoteForm;
