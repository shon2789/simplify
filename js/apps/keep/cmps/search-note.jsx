export class SearchNote extends React.Component {
  render() {
    const { sortBy } = this.props

    return (
      <div className="search-note">
        <div
          onClick={() => {
            this.props.onFilterBy("")
          }}
          className={`filter-by-btn ${!sortBy && "active-filter"}`}
        >
          All
        </div>
        <div
          onClick={() => {
            this.props.onFilterBy("note-txt")
          }}
          className={`filter-by-btn ${
            sortBy === "note-txt" && "active-filter"
          }`}
        >
          Text
        </div>
        <div
          onClick={() => {
            this.props.onFilterBy("note-img")
          }}
          className={`filter-by-btn ${
            sortBy === "note-img" && "active-filter"
          }`}
        >
          Images
        </div>
        <div
          onClick={() => {
            this.props.onFilterBy("note-video")
          }}
          className={`filter-by-btn ${
            sortBy === "note-video" && "active-filter"
          }`}
        >
          Videos
        </div>
        <div
          onClick={() => {
            this.props.onFilterBy("note-todos")
          }}
          className={`filter-by-btn ${
            sortBy === "note-todos" && "active-filter"
          }`}
        >
          Todos
        </div>
        <div
          onClick={() => {
            this.props.onFilterBy("pinned")
          }}
          className={`filter-by-btn ${sortBy === "pinned" && "active-filter"}`}
        >
          Pinned
        </div>
      </div>
    )
  }
}
