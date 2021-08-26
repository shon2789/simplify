import { noteService } from "../services/note.service.js"

export class NoteFilter extends React.Component {
  state = {
    note: {
      type: "note-txt",
      txt: "",
      url: "",
    },
  }

  changeNoteType = (type) => {
    this.setState({ note: { ...this.state.note, ["type"]: type, ["txt"]: "" } })
  }

  onValueChange = ({ target }) => {
    const txt = target.value
    this.setState({ note: { ...this.state.note, ["txt"]: txt } })
  }

  getPlaceHolderTxt = () => {
    if (this.state.note.type === "note-txt") return "Enter a note..."
    if (this.state.note.type === "note-img") return "Enter image URL..."
    if (this.state.note.type === "note-video") return "Enter video URL..."
    if (this.state.note.type === "note-todos") {
      return "Enter comma separated list..."
    }
  }

  onAddNote = (note) => {
    if (!note.txt || !note.txt.indexOf(" ")) return

    noteService.addNote(note)
    this.setState({ note: { ...this.state.note, ["txt"]: "" } })
    this.props.loadNotes()
  }

  render() {
    let { txt } = this.state.note

    return (
      <div className="note-filter">
        <div className="input-container">
          <input
            className="note-input"
            type="text"
            placeholder={this.getPlaceHolderTxt()}
            value={txt}
            onChange={this.onValueChange}
          />
          <i
            onClick={() => {
              this.changeNoteType("note-todos")
            }}
            className="fas fa-check-square check-box"
          ></i>
          <i
            onClick={() => {
              this.changeNoteType("note-img")
            }}
            className="far fa-images images-icon"
          ></i>
          <i
            onClick={() => {
              this.changeNoteType("note-txt")
            }}
            className="fas fa-font text-icon"
          ></i>
          <i
            onClick={() => {
              this.changeNoteType("note-video")
            }}
            className="fas fa-video video-icon"
          ></i>
        </div>
        <div
          onClick={() => {
            this.onAddNote(this.state.note)
          }}
          className="note-add-btn"
        >
          <i className="fas fa-plus-square"></i>
        </div>
      </div>
    )
  }
}
