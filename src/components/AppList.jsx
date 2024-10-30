import { HiTrash } from "react-icons/hi";

function AppList({ notes,onDeleteNote,onToggleNote }) {
  return (
    
      
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} onToggleNote={onToggleNote} />
        ))}
      </div>
    
  );
}

export default AppList;

function NoteItem({ note,onDeleteNote,onToggleNote }) {
  return (
    <div className="note-list__item">
      <div className="item-body">
        <div className="item-description">
          <p className={`item-title ${note.completed ? "completed" : ""}`}>{note.title}</p>
          <p className="item-desc">{note.desc}</p>
        </div>
        <div className="item-icons">
          <button onClick={()=>onDeleteNote(note.id)}>
          <HiTrash className="item-trash" />
          </button>
          <input onChange={onToggleNote} id={note.id} value={note.id} type="checkbox" />
        </div>
      </div>
      <div className="item-footer">
        <p>
          {new Date(note.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
