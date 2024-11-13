import React from 'react';
function NoteList({ notes, deleteNote }) {
    const handleDelete = (id) => {
        deleteNote(id);
    };

    return React.createElement('div', null,
        notes.length === 0
            ? React.createElement('p', null, 'No notes available.')
            : notes.map(note => React.createElement('div', {
                key: note.id,
                style: { border: '1px solid #ccc', padding: '10px', margin: '10px 0' }
            },
                React.createElement('p', null, note.text),
                React.createElement('p', null, React.createElement('strong', null, 'Tag: '), note.tag),
                React.createElement('button', { onClick: () => handleDelete(note.id) }, 'Delete')
            ))
    );
}

export default NoteList;
