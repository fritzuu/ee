// src/NoteList.js
import React from 'react';
import { Link } from 'react-router-dom';

function NoteList({ notes, deleteNote }) {
    return (
        <div>
            {notes.map((note) => (
                <div key={note.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <h2>{note.title}</h2>
                    <p>{note.content.slice(0, 100)}...</p> {/* Preview of content */}
                    <Link to={`/note/${note.id}`}>View Details</Link> {/* Link to note details */}
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default NoteList;
