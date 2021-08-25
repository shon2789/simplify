import { noteService } from "../services/note.service.js"
import { NoteFilter } from "./note-filter.jsx"
import { NotePreview } from "./note-preview.jsx"

export class NoteList extends React.Component {
  state = {
    notes: null,
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    noteService.query().then((notes) => {
      this.setState({ notes })
    })
  }

  render() {
    const { notes } = this.state
    if (!notes) return <div>Loading...</div>

    return (
      <section className="note-list">
        <NoteFilter loadNotes={this.loadNotes} />
        <div className="notes-cards-container ">
          {notes.map((note) => {
            return <NotePreview key={note.id} note={note} />
          })}
        </div>
      </section>
    )
  }
}
