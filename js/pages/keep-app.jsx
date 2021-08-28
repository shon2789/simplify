import { NoteList } from "../apps/keep/cmps/note-list.jsx"
import { noteService } from "../apps/keep/services/note.service.js";

export class KeepApp extends React.Component {

  state = {
    noteFromMail: {
      type: 'note-subject',
      subject: '',
      txt: '',

    }
  }

  componentDidMount() {
    this.noteFromMail();
  }

  noteFromMail = () => {

    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    const subject = urlSrcPrm.get('subject')
    const body = urlSrcPrm.get('body')
    if (!subject || !body) return;
    this.setState({ noteFromMail: { ...this.state.noteFromMail, subject: subject, txt: body } }, () => {
      noteService.addNote(this.state.noteFromMail)
      this.props.history.push('/keep')
    })
  }

  render() {
    return (
      <section className="keep-app main-layout">
        <NoteList />
      </section>
    )
  }
}
