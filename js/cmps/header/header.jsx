import { mailService } from "../../apps/mail/sevices/mail.service.js"
import { eventBusService } from "../../services/event-bus-service.js"
import { BookSvg } from "./book-svg.jsx"
import { KeepSvg } from "./keep-svg.jsx"
import { MailSvg } from "./mail-svg.jsx"


const { NavLink, withRouter } = ReactRouterDOM


class _Header extends React.Component {
    state = {
        unReadMails: 0
    }

    removeEventBus;

    componentDidMount() {
        if (!this.state.unReadMails) mailService.getAllUnreadMails().then((unReadMails) => { this.setState({ unReadMails }) })
        this.removeEventBus = eventBusService.on('mails-count', (unReadMails) => {
            this.setState({ unReadMails })
        })
    }

    componentWillUnmount() {
        this.removeEventBus()
    }
    render() {
        return (
            <section className="header">
                <div className="header-container main-layout">
                    <h1 onClick={() => {
                        this.props.history.push('/')
                    }} className="logo">Simplify</h1>
                    <nav className="nav-container">
                        <NavLink className="nav-link" to="/mail"><MailSvg unReadMails={this.state.unReadMails} />
                        </NavLink>
                        <NavLink className="nav-link" to='/keep'><KeepSvg />
                        </NavLink>
                        <NavLink className="nav-link" to="/book"><BookSvg />
                        </NavLink>
                    </nav>
                </div>
            </section>
        );
    }
}

export const Header = withRouter(_Header)
