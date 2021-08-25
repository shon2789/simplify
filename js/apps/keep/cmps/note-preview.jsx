import { noteService } from "../services/note.service.js"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"

export class NotePreview extends React.Component {
  state = {
    note: null,
  }

  componentDidMount() {
    this.setState({ note: this.props.note })
  }

  render() {
    const { note } = this.state
    if (!note) return <div>Loading...</div>

    return (
      <div className="note-preview">
        {note.type === "note-txt" && <NoteTxt txt={note.info.txt} />}
        {note.type === "note-img" && (
          <NoteImg title={note.info.title} img={note.info.url} />
        )}
        {note.type === "note-todos" && (
          <NoteTodos label={note.info.label} todos={note.info.todos} />
        )}
      </div>
    )
  }
}
