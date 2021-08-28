import { NoteColors } from "./note-colors.jsx"
const { Link } = ReactRouterDOM

export class NoteActions extends React.Component {
  state = {
    isEditClicked: false,
  }

  onEditNote = () => {
    this.setState({ isEditClicked: !this.state.isEditClicked })
    this.props.onEditMode(true)
  }

  render() {
    const { onDeleteNote, note, onAddCopyNote, onTogglePin, changeNoteColor } =
      this.props

    const { isPallateClicked, onTogglePallate } = this.props
    return (
      <div className="">
        <NoteColors
          changeNoteColor={changeNoteColor}
          noteId={note.id}
          isPallateClicked={isPallateClicked}
          onTogglePallate={this.props.onTogglePallate}
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
            onClick={() => {
              onTogglePallate()
            }}
            className="colors-btn note-action-btn"
          >
            <i className="fas fa-palette"></i>
          </div>
          <Link to={`/mail/newmail/${note.id}`}>
            <div className="delete-card-btn note-action-btn">
              <i className="fas fa-envelope"></i>
            </div>
          </Link>
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
