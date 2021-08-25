import { Envelope } from './envelope-svg.jsx'

export function Hero() {

    return (
        <div className="hero-container main-layout">
            <div className="left-container">
                <div className="hero-text">
                    Make Your Life Simple<span className="dot">.</span>
                </div>
                <a href="#cards"><div className="see-more-btn">See More</div></a>
            </div>

            <div className="hero-img">
                <Envelope />
            </div>
        </div>

    )
}