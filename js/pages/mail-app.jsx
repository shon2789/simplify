import { mailService } from '../apps/mail/sevices/mail.service.js'
import { MailSidenav } from "../apps/mail/cmps/mail-sidenav.jsx";
import { MailList } from "../apps/mail/pages/mail-list.jsx";


export class MailApp extends React.Component {

    state = {
        mails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query(this.state.filterBy).then(mails => {
            this.setState({ mails });
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy: filterBy }, this.loadMails);
    }


    render() {
        return (
            <section className="mail-main-container">
                <MailSidenav onSetFilter={this.onSetFilter} />
                <MailList loadMails={this.loadMails} mails={this.state.mails} onSetFilter={this.onSetFilter} />
            </section>
        )
    }
}