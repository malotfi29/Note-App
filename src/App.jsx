import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";
import AppList from "./components/AppList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
    console.log(notes);
    
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNote) => prevNote.filter((note) => note.id !== id));
  };

  const handleToggleNote = (e) => {
    const id = Number(e.target.value);
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

    if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed)-Number(a.completed)
    );

  return (
    <div className="app-container">
      <AppHeader notes={notes} sortBy={sortBy} setSortBy={setSortBy} />
      <div className="app-body">
        <AppForm onAddNote={handleAddNote} />
        <div className="app-list">
          <NoteStatus notes={notes} />
          <AppList
            notes={sortedNotes}
            onDeleteNote={handleDeleteNote}
            onToggleNote={handleToggleNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
