import { noteService } from "../services/note.service.js"

export class NoteEdit extends React.Component {
  state = {
    note: null,
    txt: "",
  }

  componentDidMount() {
    this.setState({ note: this.props.note })
  }

  onSaveEditChange = () => {
    if (!this.state.txt) return
    noteService.formatNoteByType(this.state.note.id, this.state.txt)
    this.props.loadNotes()
  }

  onGetPlaceHolderTxt = () => {
    const noteType = this.state.note.type
    return noteService.getPlaceHolderTxt(noteType)
  }

  handleChange = ({ target }) => {
    const txt = target.value
    this.setState({ txt })
  }

  render() {
    const { note, txt } = this.state
    if (!note) return <div>Loading..</div>
    return (
      <div className="note-edit">
        <div className="note-edit-input-container">
          <input
            value={txt}
            type="text"
            placeholder={this.onGetPlaceHolderTxt()}
            onChange={this.handleChange}
          />
          <div onClick={this.onSaveEditChange} className="submit-note-btn">
            <i className="fas fa-save save-btn"></i>
          </div>
        </div>
      </div>
    )
  }
}
