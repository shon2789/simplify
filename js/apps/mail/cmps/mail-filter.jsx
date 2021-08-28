

export class MailFilter extends React.Component {

    state = {
        txt: ''
    };

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


    render() {
        const { txt } = this.state;
        return (
            <div className="search-mail-form">
                <form >
                    <input name="txt" value={txt} placeholder="Search Mail..." className="search-input" type="text" onChange={this.handleChange} />
                    <button className="mail-search-btn">Search</button>
                </form>
            </div>
        )
    }
}