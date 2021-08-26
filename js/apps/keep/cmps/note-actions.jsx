export function NoteActions({
  onDeleteNote,
  note,
  onAddCopyNote,
  onTogglePin,
}) {
  return (
    <div className="note-actions">
      <div className="edit-card-btn note-action-btn">
        <i className="fas fa-edit"></i>
      </div>
      <div
        onClick={() => {
          onAddCopyNote(note)
        }}
        className="colors-btn note-action-btn"
      >
        <i className="fas fa-copy"></i>
      </div>
      <div className="colors-btn note-action-btn">
        <i className="fas fa-palette"></i>
      </div>
      <div
        onClick={() => {
          onDeleteNote(note.id)
        }}
        className="delete-card-btn note-action-btn"
      >
        <i className="fas fa-trash"></i>
      </div>
      <div
        onClick={() => {
          onTogglePin(note.id)
        }}
        className="pin-card-btn note-action-btn"
      >
        <i className="fas fa-thumbtack"></i>
      </div>
    </div>
  )
}
