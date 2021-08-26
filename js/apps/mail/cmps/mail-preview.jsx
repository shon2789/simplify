import { utilService } from "../../../services/util.service.js";
import { mailService } from "../sevices/mail.service.js";
import { MailLongTxt } from "./mail-long-txt.jsx";
const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {
    state = {
        isReading: false,
        isStarred: this.props.mail.isStarred,
        mail: this.props.mail
    }


    isReading = () => {
        this.setState({ isReading: !this.state.isReading })
    }

    onToggleStar = (ev) => {
        ev.preventDefault();
        mailService.ToggleStar(this.props.mail.id).then(() => {
            this.props.loadMails()
        })
        this.setState({ isStarred: !this.state.isStarred })
    }

    onDeleteMail = (ev) => {
        ev.preventDefault();
        mailService.deleteMail(this.props.mail.id).then(this.props.loadMails())
    }

    // markMailAsRead = () => {
    //     this.setState({ mail: { ...this.state.mail, isRead: true } }, () => {
    //         mailService.onReadMail(this.state.mail.id).then(() => {
    //             this.props.loadMails();
    //         })
    //     })
    // }

    render() {
        const { mail } = this.props;
        const { isReading, isStarred } = this.state;
        return (
            <Link to={{ pathname: `/mail/${mail.id}`, state: this.props.loadMails }}>
                <section onClick={this.markMailAsRead}>
                    <section onClick={this.isReading} className={`mail-preview ${(mail.isRead) ? 'read' : ''}`}>
                        <h3 className="mail-from-preview"><i onClick={this.onToggleStar} className={`${isStarred ? 'active-star' : ''} mail-star fas fa-star`}></i><i onClick={this.onDeleteMail} className="delete-mail fas fa-trash"></i>{mail.from}</h3>
                        <p className="mail-subject-preview">{mail.subject}</p>
                        <MailLongTxt txt={mail.body} />
                        <p className="mail-sent-time-preview">{utilService.getFormattedDate(mail.sentAt)}</p>
                    </section>
                    {/* {isReading && <div className="mail-body">{mail.body}</div>} */}
                </section>
            </Link>

        )
    }
}