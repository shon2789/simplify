import { utilService } from "../../../services/util.service.js";
import { mailService } from "../sevices/mail.service.js";
const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {
    state = {
        isReading: false,
        isStarred: this.props.mail.isStarred,
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

    render() {
        const { mail } = this.props;
        const { isReading, isStarred } = this.state;
        return (
            <Link to={`/mail/${mail.id}`}>
                <section>
                    <section onClick={this.isReading} className={`mail-preview ${(mail.isRead) ? 'read' : ''}`}>
                        <h3><i onClick={this.onToggleStar} className={`${isStarred ? 'active-star' : ''} mail-star fas fa-star`}></i>{mail.from}</h3>
                        <p>{mail.subject}</p>
                        <p>{utilService.getFormattedDate(mail.sentAt)}</p>
                    </section>
                    {/* {isReading && <div className="mail-body">{mail.body}</div>} */}
                </section>
            </Link>

        )
    }
}