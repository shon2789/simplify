export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
        },
    };

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } },
        );
    };

    render() {
        const { filterBy } = this.state;
        return (
            <form action="">
                <input name="txt" value={filterBy.txt} placeholder="Search Mail..." className="search-input" type="text" onChange={this.handleChange} />
                <button className="mail-search-btn">Search</button>
            </form>
        )
    }
}