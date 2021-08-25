import { CopyrightSvg } from "./copyright-svg.jsx"

const { withRouter } = ReactRouterDOM

function _Footer() {

    return (
        <div className="footer">
            <CopyrightSvg />
            <p> Created By Shon Shinkarenko & Jonathan Geiger</p>
        </div>
    )
}

export const Footer = withRouter(_Footer);