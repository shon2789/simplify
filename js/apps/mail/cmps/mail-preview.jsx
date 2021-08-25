import { utilService } from "../../../services/util.service.js";
const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {
    state = {
        isReading: false,
    }


    isReading = () => {
        this.setState({ isReading: !this.state.isReading })
    }

    render() {
        const { mail } = this.props;
        const { isReading } = this.state;
        return (
            <Link to={`/mail/${mail.id}`}>
                <section>
                    <section onClick={this.isReading} className={`mail-preview ${(mail.isRead) ? 'read' : ''}`}>
                        <h3><i class="fas fa-star"></i>{mail.from}</h3>
                        <p>{mail.subject}</p>
                        <p>{utilService.getFormattedDate(mail.sentAt)}</p>
                    </section>
                    {isReading && <div className="mail-body">{mail.body}</div>}
                </section>
            </Link>

        )
    }
}