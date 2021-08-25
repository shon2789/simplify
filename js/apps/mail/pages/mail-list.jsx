import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailPreview } from "../cmps/mail-preview.jsx";
import { mailService } from "../sevices/mail.service.js";

export class MailList extends React.Component {
    state = {
        mails: null,
        filterBy: {
            txt: '',
        },
    }



    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query(this.state.filterBy).then(mails => {
            this.setState({ mails });
        })
    }

    onSetFilter = (txt) => {
        this.setState({ filterBy: txt }, this.loadMails);
    }


    render() {
        const { mails } = this.state;
        console.log(mails);
        if (!mails) return <div>Loading...</div>
        return (
            <section className="mails-container ">
                <div className="form-container">
                    <MailFilter onSetFilter={this.onSetFilter} />
                </div>
                {mails && mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
            </section>
        )
    }
}