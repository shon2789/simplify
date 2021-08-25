import { BookSvg } from "../book-svg.jsx"
import { KeepSvg } from "../keep-svg.jsx"
import { MailSvg } from "../header/mail-svg.jsx"

const { Link } = ReactRouterDOM;

export function Cards() {
    return (
        <section className="cards-main-container">
            <div className="cards-content-container main-layout">
                <h1 className="cards-header-title">See What You Can Do</h1>

                <div id="cards" className="cards-container">

                    <div className="card">
                        <MailSvg />
                        <p>My Mail</p>

                        <Link to="/mail"><div className="learn-more-btn">Learn More</div></Link>
                    </div>
                    <div className="card">
                        <KeepSvg />
                        <p>My Notes</p>
                        <Link to="/keep"><div className="learn-more-btn">Learn More</div></Link>
                    </div>
                    <div className="card">
                        <BookSvg />
                        <p>My Books</p>
                        <Link to="/book"><div className="learn-more-btn">Learn More</div></Link>

                    </div>
                </div>
            </div>
        </section>
    );
}
