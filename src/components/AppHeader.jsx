

function AppHeader({ notes,sortBy,setSortBy }) {
  
  return (
    <div className="app-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="completed">sort based on completed</option>
        <option value="earliest">sort based on earliest</option>
        <option value="latest">sort based on latest</option>
      </select>
    </div>
  );
}

export default AppHeader;
