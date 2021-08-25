import { MailSidenav } from "../cmps/mail-sidenav.jsx";
import { mailService } from "../sevices/mail.service.js";

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail();
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

    render() {
        const { mail } = this.state;
        if (!mail) return <div>Loading...</div>
        return (

            <section className="mail-details main-layout">
                <i onClick={this.onBack} className="go-back fas fa-arrow-left"></i>
                {/* <MailSidenav /> */}
                <div className="mail-content">
                    <div className="mail-content-head">
                        <div className="mail-head-from">
                            <h1>Sent from: {mail.from}</h1>
                            <h4>Subject: {mail.subject}</h4>
                        </div>
                        <div className="mail-delete-container">
                            {/* <button onClick={this.onDeleteMail}>Delete Mail</button> */}

                        </div>
                    </div>
                    <div className="mail-content-body">
                        <p>{mail.body}</p>
                        <i onClick={this.onDeleteMail} className="delete-mail fas fa-trash"></i>
                    </div>
                </div>
            </section>

        )
    }
}