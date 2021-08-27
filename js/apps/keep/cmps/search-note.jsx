export class SearchNote extends React.Component {
  state = {
    sortBy: "",
  }

  onFilterBy = (noteType) => {
    this.props.loadNotes(noteType)
    this.setState({ sortBy: noteType })
  }

  render() {
    const { sortBy } = this.state

    return (
      <div className="search-note">
        <div
          onClick={() => {
            this.onFilterBy("")
          }}
          className={`filter-by-btn ${!sortBy && "active-filter"}`}
        >
          All
        </div>
        <div
          onClick={() => {
            this.onFilterBy("note-txt")
          }}
          className={`filter-by-btn ${
            sortBy === "note-txt" && "active-filter"
          }`}
        >
          Text
        </div>
        <div
          onClick={() => {
            this.onFilterBy("note-img")
          }}
          className={`filter-by-btn ${
            sortBy === "note-img" && "active-filter"
          }`}
        >
          Images
        </div>
        <div
          onClick={() => {
            this.onFilterBy("note-video")
          }}
          className={`filter-by-btn ${
            sortBy === "note-video" && "active-filter"
          }`}
        >
          Videos
        </div>
        <div
          onClick={() => {
            this.onFilterBy("note-todos")
          }}
          className={`filter-by-btn ${
            sortBy === "note-todos" && "active-filter"
          }`}
        >
          Todos
        </div>
        <div
          onClick={() => {
            this.onFilterBy("pinned")
          }}
          className={`filter-by-btn ${sortBy === "pinned" && "active-filter"}`}
        >
          Pinned
        </div>
      </div>
    )
  }
}
