
import { MailSidenav } from "../apps/mail/cmps/mail-sidenav.jsx";
import { MailList } from "../apps/mail/pages/mail-list.jsx";


export class MailApp extends React.Component {

    render() {
        return (
            <section className="mail-main-container">
                <MailSidenav />
                <MailList />
            </section>
        )
    }
}