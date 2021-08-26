import { NoteColors } from "./note-colors.jsx"

export class NoteActions extends React.Component {
  state = {
    isPallateClicked: false,
    isEditClicked: false,
  }

  onTogglePallate = () => {
    this.setState({ isPallateClicked: !this.state.isPallateClicked })
  }

  onEditNote = () => {
    this.setState({ isEditClicked: !this.state.isEditClicked })
    this.props.onEditMode(this.state.isEditClicked)
  }

  render() {
    const { onDeleteNote, note, onAddCopyNote, onTogglePin, changeNoteColor } =
      this.props

    const { isPallateClicked, isEditClicked } = this.state
    return (
      <div className="">
        <NoteColors
          changeNoteColor={changeNoteColor}
          noteId={note.id}
          isPallateClicked={isPallateClicked}
        />

        <div className="note-actions">
          <div
            onClick={this.onEditNote}
            className="edit-card-btn note-action-btn"
          >
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
          <div
            onClick={this.onTogglePallate}
            className="colors-btn note-action-btn"
          >
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
      </div>
    )
  }
}
