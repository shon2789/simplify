import { BookSvg } from "./book-svg.jsx"
import { KeepSvg } from "./keep-svg.jsx"
import { MailSvg } from "./mail-svg.jsx"

const { NavLink, withRouter } = ReactRouterDOM


function _Header(props) {
    return (
        <section className="header">
            <div className="header-container main-layout">
                <h1 onClick={() => {
                    props.history.push('/')
                }} className="logo">Simplify</h1>

                <nav className="nav-container">
                    <NavLink className="nav-link" to="/mail"><MailSvg />
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

export const Header = withRouter(_Header)
