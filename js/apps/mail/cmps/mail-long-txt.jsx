export class MailLongTxt extends React.Component {
    state = {
        txt: '',
    }
    componentDidMount() {
        this.loadTxt();

    }

    loadTxt = () => {
        this.setState({ txt: this.props.txt })
    }

    render() {
        const { txt } = this.state
        if (!txt) return <div>Loading....</div>

        return (
            <p className="mail-body-preview">{txt}</p>
        )
    }
}