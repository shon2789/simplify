import { utilService } from "../../../services/util.service.js";
import { mailService } from "../sevices/mail.service.js";

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail();
    }

    componentDidUpdate() {
        if (!this.state.mail.isRead) this.markMailAsRead();
    }

    loadMail = () => {
        const id = this.props.match.params.mailId;
        mailService.getMailById(id).then((mail) => {
            if (!mail) this.props.history.push('/mail')
            this.setState({ mail })
        })
    }



    onDeleteMail = () => {
        mailService.deleteMail(this.state.mail.id).then(this.onBack)
    }

    onBack = () => {
        this.props.history.push('/mail')
    }

    markMailAsRead = () => {
        if (!this.state.mail) return;
        this.setState({ mail: { ...this.state.mail, isRead: true } }, () => {
            mailService.onReadMail(this.state.mail.id)
        })
    }


    render() {
        const { mail } = this.state;
        if (!mail) return <div>Loading...</div>

        return (

            <section className="mail-details main-layout">
                <i onClick={this.onBack} className="go-back fas fa-arrow-left"></i>
                <div className="mail-content">
                    <div className="mail-content-head">
                        <div className="mail-head-from">
                            <h1>Sent from: {mail.from}</h1>
                            <h3 className="mail-to">Sent to: {mail.to}</h3>
                            <h4>Subject: {mail.subject}</h4>
                        </div>
                        <div className="mail-delete-container">
                            <p> {utilService.getFormattedDate(mail.sentAt)}</p>
                        </div>
                    </div>
                    <div className="mail-content-body">
                        <p>{mail.body}</p>
                        <i onClick={this.onDeleteMail} className="delete-mail-details fas fa-trash"></i>
                    </div>
                </div>
            </section>

        )
    }
}