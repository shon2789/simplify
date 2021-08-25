import { MailInboxSvg } from "../apps/mail/cmps/mail-inbox-svg.jsx";
import { MailIndex } from "../apps/mail/pages/mail-index.jsx";


export class MailApp extends React.Component {

    render() {
        return (
            <section className="">
                <div className=" mail-side-nav">
                    <div className="side-nav side-nav-inbox"><div className="side-nav-icon"><i className="fas fa-inbox"></i></div> Inbox</div>
                    <div className="side-nav"> <div className="side-nav-icon"><i className="fas fa-star"></i></div> Starred</div>
                    <div className="side-nav"><div className="side-nav-icon"><i className="fas fa-paper-plane"></i></div> Sent</div>
                    <div className="side-nav"><div className="side-nav-icon"><i className="fas fa-file"></i></div> Drafts</div>
                    <div className="side-nav"><div className="side-nav-icon"><i className="fas fa-trash"></i></div> Trash</div>
                </div>
                {/* <MailIndex /> */}
            </section>
        )
    }
}