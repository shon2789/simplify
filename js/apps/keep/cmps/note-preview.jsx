import { NoteActions } from "./note-actions.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export class NotePreview extends React.Component {
  state = {
    note: null,
  }

  componentDidMount() {
    this.setState({ note: this.props.note })
  }

  render() {
    const { note, video } = this.state
    if (!note) return <div>Loading...</div>
    // if (!video) return <div>Loading...</div>

    return (
      <div className="note-preview">
        {note.type === "note-txt" && <NoteTxt txt={note.info.txt} />}
        {note.type === "note-video" && <NoteVideo video={note.info.url} />}
        {note.type === "note-img" && (
          <NoteImg title={note.info.title} img={note.info.url} />
        )}
        {note.type === "note-todos" && (
          <NoteTodos
            label={note.info.label}
            todos={note.info.todos}
            id={note.id}
            loadNotes={this.props.loadNotes}
          />
        )}
        <NoteActions
          onDeleteNote={this.props.onDeleteNote}
          note={note}
          onAddCopyNote={this.props.onAddCopyNote}
          onTogglePin={this.props.onTogglePin}
        />
      </div>
    )
  }
}
