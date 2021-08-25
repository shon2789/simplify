export class MailSidenav extends React.Component {
    // state = {
    //     inbox: false,
    //     starred: false,
    //     sent: false,
    //     drafts: false,
    //     trash: false,
    // }

    // makeAllFalse = () => {
    //     for (let item in this.state) {
    //         // this.setState({ this.state[item]: false });
    //     }
    // }


    // toggleActive = (navItem) => {
    //     this.makeAllFalse();
    //     switch (navItem) {
    //         case 'inbox':
    //             this.setState({ inbox: true });
    //             break;
    //         case 'starred':
    //             this.setState({ starred: true });
    //             break;
    //         case 'sent':
    //             this.setState({ sent: true });
    //             break;
    //         case 'drafts':
    //             this.setState({ drafts: true });
    //             break;
    //         case 'trash':
    //             this.setState({ tash: true });
    //             break;
    //     }
    // }

    render() {
        return (
            <div className=" mail-side-nav">
                <div className="compose-container"><div className="side-nav-compose"><div className="side-nav-icon"><i className="fas fa-plus-circle"></i></div> Compose</div></div>
                <div onClick={() => { this.toggleActive('inbox') }} className="side-nav side-nav-inbox"><div className="side-nav-icon"><i className="fas fa-inbox"></i></div> Inbox</div>
                <div onClick={() => { this.toggleActive('starred') }} className="side-nav"> <div className="side-nav-icon"><i className="fas fa-star"></i></div> Starred</div>
                <div onClick={() => { this.toggleActive('sent') }} className="side-nav"><div className="side-nav-icon"><i className="fas fa-paper-plane"></i></div> Sent</div>
                <div onClick={() => { this.toggleActive('drafts') }} className="side-nav"><div className="side-nav-icon"><i className="fas fa-file"></i></div> Drafts</div>
                <div onClick={() => { this.toggleActive('trash') }} className="side-nav"><div className="side-nav-icon"><i className="fas fa-trash"></i></div> Trash</div>
            </div>
        )
    }
}