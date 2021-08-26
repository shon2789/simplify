const { Link } = ReactRouterDOM

export class MailSidenav extends React.Component {

    state = {
        filterBy: {
            status: 'inbox',
            isStarred: false,
            isRead: false,
            txt: ''
        }
    }


    setFilter = (value) => {
        console.log(value);
        this.setState({ filterBy: { ...this.state.filterBy, status: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    }



    render() {
        const { status } = this.state.filterBy;
        return (
            <div className=" mail-side-nav">
                <div className="compose-container"><Link to="/mail/newmail"><div className="side-nav-compose"><div className="side-nav-icon"><i className="fas fa-plus-circle"></i></div> Compose</div></Link></div>
                <div value="inbox" onClick={() => { this.setFilter('inbox') }} className={`${(status === 'inbox') ? 'active' : ''} side-nav side-nav-inbox`}><div className="side-nav-icon"><i className="fas fa-inbox"></i></div> Inbox</div>
                <div value="starred" onClick={() => { this.setFilter('starred') }} className={`${(status === 'starred') ? 'active' : ''} side-nav`}> <div className="side-nav-icon"><i className="fas fa-star"></i></div> Starred</div>
                <div value="sent" onClick={() => { this.setFilter('sent') }} className={`${(status === 'sent') ? 'active' : ''} side-nav`}><div className="side-nav-icon"><i className="fas fa-paper-plane"></i></div> Sent</div>
                <div value="drafts" onClick={() => { this.setFilter('drafts') }} className={`${(status === 'drafts') ? 'active' : ''} side-nav`}><div className="side-nav-icon"><i className="fas fa-file"></i></div> Drafts</div>
                <div value="trash" onClick={() => { this.setFilter('trash') }} className={`${(status === 'trash') ? 'active' : ''} side-nav`}><div className="side-nav-icon"><i className="fas fa-trash"></i></div> Trash</div>
            </div>
        )
    }
}