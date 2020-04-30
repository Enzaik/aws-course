import React, { useState, useEffect } from 'react';
import { graphqlOperation, API } from 'aws-amplify';

import { createNote, deleteNote } from './graphql/mutations';
import { listNotes } from './graphql/queries';
import { default as App } from './App';

const AppComponent = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await API.graphql(graphqlOperation(listNotes));
      setNotes(data.listNotes.items);
    }
    fetchData();
  });

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    const input = {
      description: note,
      name: note,
    };
    const result = await API.graphql(graphqlOperation(createNote, { input }));
    const newNote = { description: result.data.createNote.name };
    setNotes([newNote, ...notes]);
  };

  const handleRemoveNote = async (id) => {
    const input = { id };
    const result = await API.graphql(graphqlOperation(deleteNote, { input }));
  };

  const styles = {
    app: 'container mx-auto \
      align-center justify-center  \
      font-bold text-lg hover:cursor cursor-pointer',
  };

  return (
    <App
      styles={styles}
      notes={notes}
      handleNoteChange={handleNoteChange}
      handleAddNote={handleAddNote}
      handleRemoveNote={handleRemoveNote}
    />
  );
};

export default AppComponent;
