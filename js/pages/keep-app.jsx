import { NoteList } from "../apps/keep/cmps/note-list.jsx"

export class KeepApp extends React.Component {
  render() {
    return (
      <section className="keep-app main-layout">
        <NoteList />
      </section>
    )
  }
}
