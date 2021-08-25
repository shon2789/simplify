import { BookSvg } from "../book-svg.jsx"
import { KeepSvg } from "../keep-svg.jsx"
import { MailSvg } from "../header/mail-svg.jsx"


export function Cards() {
    return (
        <section className="cards-main-container">
            <div className="cards-content-container main-layout">
                <h1 className="cards-header-title">See What You Can Do</h1>

                <div id="cards" className="cards-container">

                    <div className="card">
                        <MailSvg />
                        <p>My Mail</p>

                        <div className="learn-more-btn">Learn More</div>
                    </div>
                    <div className="card">
                        <KeepSvg />
                        <p>My Notes</p>
                        <div className="learn-more-btn">Learn More</div>
                    </div>
                    <div className="card">
                        <BookSvg />
                        <p>My Books</p>
                        <div className="learn-more-btn">Learn More</div>

                    </div>
                </div>
            </div>
        </section>
    );
}
