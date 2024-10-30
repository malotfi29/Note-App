

function NoteStatus({notes}) {
    const allNotes=notes.length
    const completedNotes=notes.filter(n=>n.completed).length
    const uncompletedNotes=allNotes-completedNotes

    if(!allNotes) return <h2>You dont have any notes!</h2>;

    return (
    <div className="note-statuses">
        <div className="sattus">
          <span className="status-title">All</span>
          <span className="status-num">{allNotes}</span>
        </div>
        <div className="sattus">
          <span className="status-title">Completed</span>
          <span className="status-num">{completedNotes}</span>
        </div>
        <div className="sattus">
          <span className="status-title">Uncompleted</span>
          <span className="status-num">{uncompletedNotes}</span>
        </div>
      </div>
  )
}

export default NoteStatus
