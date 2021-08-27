import { noteService } from "../services/note.service.js"
import { NoteFilter } from "./note-filter.jsx"
import { NotePreview } from "./note-preview.jsx"
import { SearchNote } from "./search-note.jsx"

export class NoteList extends React.Component {
  state = {
    notes: null,
    sortBy: "",
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = (noteType = "") => {
    noteService.query(noteType).then((notes) => {
      this.setState({ notes })
    })
  }

  onDeleteNote = (noteId) => {
    noteService.deleteNote(noteId)
    this.loadNotes()
  }

  onAddCopyNote = (note) => {
    noteService.addCopyNote(note)
    this.loadNotes()
  }

  onTogglePin = (noteId) => {
    noteService.toggleNotePin(noteId)
    this.loadNotes()
  }

  onFilterBy = (noteType) => {
    this.loadNotes(noteType)
    this.setState({ sortBy: noteType })
  }

  render() {
    const { notes } = this.state
    if (!notes) return <div>Loading...</div>

    return (
      <section className="note-list">
        <SearchNote
          loadNotes={this.loadNotes}
          onFilterBy={this.onFilterBy}
          sortBy={this.state.sortBy}
        />
        <NoteFilter loadNotes={this.loadNotes} onFilterBy={this.onFilterBy} />
        {noteService.checkPinnedNotes() && (
          <React.Fragment>
            <h2 className="pinned-note-h2">Pinned Notes</h2>
            <div className="notes-cards-container ">
              {notes.map((note) => {
                {
                  if (note.isPinned) {
                    return (
                      <NotePreview
                        key={note.id}
                        note={note}
                        loadNotes={this.loadNotes}
                        onDeleteNote={this.onDeleteNote}
                        onAddCopyNote={this.onAddCopyNote}
                        onTogglePin={this.onTogglePin}
                      />
                    )
                  }
                }
              })}
            </div>
          </React.Fragment>
        )}
        <h2 className="my-note-h2">My Notes</h2>
        <div className="notes-cards-container ">
          {notes.map((note) => {
            {
              if (!note.isPinned) {
                return (
                  <NotePreview
                    key={note.id}
                    note={note}
                    loadNotes={this.loadNotes}
                    onDeleteNote={this.onDeleteNote}
                    onAddCopyNote={this.onAddCopyNote}
                    onTogglePin={this.onTogglePin}
                  />
                )
              }
            }
          })}
        </div>
      </section>
    )
  }
}
