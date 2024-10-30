import { useState } from "react";

function AppForm({onAddNote}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !desc) return null;
    const newNote = {
      title,
      desc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote)
    setDesc("")
    setTitle("")
    
  };


  return (
    <div className="app-form">
      <h2>Add New Note</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="note title..."
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="note description..."
        />
        <button className="btn" type="submit">Add New Note</button>
      </form>
    </div>
  );
}

export default AppForm;
