import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import './tailwind.generated.css';

const App = ({ styles, notes, handleAddNote, handleNoteChange, handleRemoveNote }) => {
  return (
    <div className={styles.app}>
      <form onSubmit={handleAddNote}>
        <input type="text" className="border-2 border-gray-600" onChange={handleNoteChange} />
        <button className="ml-6 px-6 border-red-200 border-2">Lol</button>
      </form>
      <div className="w-1/4">
        {notes.map((note) => {
          return (
            <div className="relative">
              {note && note.description}
              <button className="absolute right-0 outline-none" onClick={() => handleRemoveNote(note.id)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withAuthenticator(App, { includeGreetings: true });
