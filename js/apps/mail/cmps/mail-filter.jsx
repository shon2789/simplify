import { mailService } from "../sevices/mail.service.js";

export class MailFilter extends React.Component {
    // state = {
    //     filterBy: this.props.filterBy
    // };
    state = {
        txt: ''
    };

    // componentDidMount() {
    //     this.loadFilterBy()
    // }

    // loadFilterBy() {
    //     this.setState({ txt: txt })
    // }

    handleChange = ({ target }) => {
        const field = target.name;
        const txt = target.type === 'number' ? +target.value : target.value;
        this.setState({ txt }, () => {
            let newFilterBy = this.props.filterBy;
            newFilterBy.txt = this.state.txt;
            console.log(newFilterBy)
            this.props.onSetFilter(newFilterBy)
        });
    };
    // handleChange = ({ target }) => {
    //     const field = target.name;
    //     const value = target.type === 'number' ? +target.value : target.value;
    //     this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
    //         this.props.onSetFilter(this.state.filterBy)
    //     });
    // };

    render() {
        const { txt } = this.state;
        // if (!filterBy) return <div>Loading...</div>
        return (
            <form action="">
                <input name="txt" value={txt} placeholder="Search Mail..." className="search-input" type="text" onChange={this.handleChange} />
                <button className="mail-search-btn">Search</button>
            </form>
        )
    }
}