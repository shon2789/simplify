export class NoteFilter extends React.Component {
  state = {
    note: {
      type: "note-txt",
      txt: "",
    },
  }

  changeNoteType = (type) => {
    this.setState({ note: { ...this.state.note, ["type"]: type } })
  }

  onValueChange = ({ target }) => {
    const txt = target.value
    this.setState({ note: { ...this.state.note, ["txt"]: txt } })
  }

  render() {
    const { onAddNote } = this.props
    let { txt, type } = this.state.note

    return (
      <div className="note-filter">
        <div className="input-container">
          <input
            className="note-input"
            type="text"
            placeholder="Take a note..."
            value={txt}
            onChange={this.onValueChange}
          />
          <i
            onClick={() => {
              this.changeNoteType("note-todos")
            }}
            className="fas fa-check-square check-box"
          ></i>
          <i
            onClick={() => {
              this.changeNoteType("note-img")
            }}
            className="far fa-images images-icon"
          ></i>
          <i
            onClick={() => {
              this.changeNoteType("note-txt")
            }}
            className="fas fa-font text-icon"
          ></i>
        </div>
        <div
          onClick={() => {
            onAddNote(this.state.note)
          }}
          className="note-add-btn"
        >
          <i className="fas fa-plus-square"></i>
        </div>
      </div>
    )
  }
}
