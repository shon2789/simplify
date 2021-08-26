export class NoteEdit extends React.Component {
  render() {
    return (
      <div className="note-edit">
        <div className="edit-note-actions">
          <i className="fas fa-check-square edit-note-btn"></i>
          <i className="fas fa-video edit-note-btn"></i>
          <i className="fas fa-images edit-note-btn"></i>
          <i className="fas fa-font edit-note-btn"></i>
        </div>
        <div className="note-edit-input-container">
          <input type="text" placeholder="Edit Me..." />
          <div className="submit-note-btn">
            <i className="fas fa-save save-btn"></i>
          </div>
        </div>
      </div>
    )
  }
}
