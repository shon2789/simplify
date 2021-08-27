import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailPreview } from "../cmps/mail-preview.jsx"
import { mailService } from "../sevices/mail.service.js"

export class MailList extends React.Component {
  // state = {
  //     mails: null,
  //     filterBy: {
  //         status: '',
  //         txt: '',
  //         isRead: false,
  //         isStarred: false,

  //     },
  // }

  // componentDidMount() {
  //     this.loadMails();
  // }

  // loadMails = () => {
  //     mailService.query(this.state.filterBy).then(mails => {
  //         this.setState({ mails });
  //     })
  // }

  // onSetFilter = (txt) => {
  //     this.setState({ filterBy: txt }, this.loadMails);
  // }

  render() {
    const { mails, onSortMailBy, filterBy } = this.props
    if (!mails) return <div>Loading...</div>
    return (
      <section className="mails-container main-layout">
        <div className="form-container">
          <div className="mail-search-container">
            <i
              onClick={() => {
                this.props.toggleNav()
              }}
              className="mail-hamburger fas fa-bars"
            ></i>
            <MailFilter
              filterBy={filterBy}
              onSetFilter={this.props.onSetFilter}
            />
          </div>
        </div>
        <div className="top-bar-list folder">
          <h3>
            {this.props.filterBy.status.charAt(0).toUpperCase() +
              this.props.filterBy.status.slice(1)}
          </h3>
        </div>
        <div className="top-bar-list full">
          <h3 className="mail-from-list">From</h3>
          <h3 className="mail-subject-list">Subject</h3>
          <h3 className="mail-message-list">Message</h3>
          <h3
            onClick={() => {
              onSortMailBy("time")
            }}
            className="mail-time-list"
          >
            Time
          </h3>
        </div>
        {mails.length === 0 && (
          <h1 className="no-mails-to-show">No mails to show</h1>
        )}
        {mails &&
          mails.map((mail) => (
            <MailPreview
              loadMails={this.props.loadMails}
              key={mail.id}
              mail={mail}
            />
          ))}
      </section>
    )
  }
}
