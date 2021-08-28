import { utilService } from "../../../services/util.service.js"
import { noteService } from "../../keep/services/note.service.js"
import { mailService } from "../sevices/mail.service.js"

const { Link } = ReactRouterDOM

export class MailCompose extends React.Component {
  state = {
    mail: {
      subject: "",
      body: "",
      to: "",
      from: "From: Shon@Simplify.com",
    },
  }

  componentDidMount() {
    this.composeFromNote()
  }



  composeFromNote = () => {
    const noteId = this.props.match.params.noteId
    if (!noteId) return

    noteService.getNoteById(noteId).then((note) => {
      const noteContent = noteService.getNoteContentByType(note)
      this.setState({ mail: { ...this.state.mail, body: noteContent } })
    })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === "from") return
    this.setState({ mail: { ...this.state.mail, [field]: value } })
  }

  onSendMail = () => {
    mailService.sendMail(this.state.mail).then(() => {
      this.onBack()
    })
  }

  onBack = () => {
    this.props.history.push("/mail")
  }

  render() {
    const { mail } = this.state
    return (
      <section className="mail-compose main-layout">
        {/* <i onClick={this.onBack} className="go-back-compose fas fa-arrow-left"></i> */}
        <div onClick={this.onBack} className="go-back-container-compose">
          <i className="go-back fas fa-arrow-left"></i>
          <div className="go-back-text">Go Back</div>
        </div>
        <div className="mail-compose-container">
          <div className="mail-compose-top">
            <h1>New Mail</h1>
            <div className="new-mail-btn">
              <Link to={`/keep?subject=${mail.subject}&body=${mail.body}`}><i className="to-note-icon fas fa-sticky-note"></i></Link>
              <i onClick={this.onSendMail} className="new-mail-send-btn fas fa-paper-plane"></i>
            </div>
          </div>
          <div className="mail-compose-header">
            <form className="mail-compose-header-form">
              <div className="input-container-compose">
                <input
                  onChange={this.handleChange}
                  value={mail.to}
                  name="to"
                  id="to"
                  type="email"
                  placeholder="To:"
                />
              </div>
              <div className="input-container-compose">
                <input
                  onChange={this.handleChange}
                  value={mail.from}
                  name="from"
                  id="from"
                  type="email"
                  placeholder="From: Shon@simplify.com"
                />
              </div>
              <div className="input-container-compose">
                <input
                  onChange={this.handleChange}
                  value={mail.subject}
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Enter Subject..."
                />
              </div>
            </form>
          </div>
          <div className="mail-compose-body">
            <form>
              <textarea
                onChange={this.handleChange}
                value={mail.body}
                name="body"
                type="textarea"
                placeholder="Email Content..."
              />
            </form>
          </div>
        </div>
      </section>
    )
  }
}
