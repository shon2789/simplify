import { mailService } from '../apps/mail/sevices/mail.service.js'
import { MailSidenav } from "../apps/mail/cmps/mail-sidenav.jsx";
import { MailList } from "../apps/mail/pages/mail-list.jsx";
import { eventBusService } from '../services/event-bus-service.js';


export class MailApp extends React.Component {

    // state = {
    //     mails: null,
    //     filterBy: null,
    // }
    state = {
        mails: null,
        filterBy: {
            status: 'inbox',
            isStarred: false,
            isRead: false,
            txt: ''
        }
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query(this.state.filterBy).then(mails => {
            this.setState({ mails });
        })
        this.countUnreadMails();
    }

    countUnreadMails = () => {
        mailService.getAllUnreadMails().then(num => {
            console.log(num)
            eventBusService.emit('mails-count', num)
        })
    }

    onSetFilter = (newFilterBy) => {
        this.setState({ filterBy: newFilterBy }, this.loadMails);
    }

    onSortMailBy = (sortBy) => {
        console.log(sortBy)
    }

    getCurrStatus = (status) => {
        console.log(status)
        this.setState({ filterBy: { ...this.state.filterBy, status: status } }, () => {
            this.onSetFilter(this.state.filterBy)
        })
    }

    render() {
        return (
            <section className="mail-main-container">
                <MailSidenav getCurrStatus={this.getCurrStatus} filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} loadMails={this.loadMails} />
                <MailList onSortMailBy={this.onSortMailBy} filterBy={this.state.filterBy} loadMails={this.loadMails} mails={this.state.mails} onSetFilter={this.onSetFilter} />
            </section>
        )
    }
}