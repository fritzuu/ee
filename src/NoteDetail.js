// src/NoteDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function NoteDetail() {
    const { id } = useParams(); // Get the note ID from the URL
    const notes = JSON.parse(localStorage.getItem('notes')); // Get the stored notes from localStorage
    const note = notes ? notes.find((note) => note.id === id) : null; // Find the note by ID

    if (!note) {
        return <p>Note not found</p>; // Show message if note is not found
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p> {/* Display full content */}
            <p><strong>Created on:</strong> {note.date}</p>
        </div>
    );
}

export default NoteDetail;
