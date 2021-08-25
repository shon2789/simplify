import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailPreview } from "../cmps/mail-preview.jsx";
import { mailService } from "../sevices/mail.service.js";

export class MailList extends React.Component {
    state = {
        mails: null,

    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query().then(mails => {

            this.setState({ mails });
        })
    }





    render() {
        const { mails } = this.state;
        console.log(mails);
        if (!mails) return <div>Loading...</div>
        return (
            <section className="mails-container ">
                <div className="form-container">
                    <MailFilter />
                </div>
                {mails && mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
            </section>
        )
    }
}