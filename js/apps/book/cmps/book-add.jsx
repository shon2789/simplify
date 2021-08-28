import { bookService } from "../services/book.service.js"
import { GoogleBooks } from "./google-books.jsx"
import { utilService } from "../../../services/util.service.js"

export class BookAdd extends React.Component {
  state = {
    bookName: "",
    booksToShow: null,
  }

  handleChange = (ev) => {
    this.setState({ bookName: ev.target.value })
    if (!ev.target.value) {
      this.setState({ bookName: "" })
    }
    utilService.debounce(
      bookService.showGoogleBooks(ev.target.value).then((booksToShow) => {
        this.setState({ booksToShow })
      }),
      800
    )
  }



  onAddBook = (book) => {
    bookService.addGoogleBook(book)
    this.props.loadBooks()
    this.setState({ bookName: "" })
  }

  render() {
    const { bookName, booksToShow } = this.state
    return (
      <section>
        <form className="add-book-form-container">
          <label htmlFor="new-book">Add Book: </label>
          <input
            type="text"
            id="new-book"
            value={bookName}
            onChange={this.handleChange}
            placeholder="Search By Name"
          />
          <button
            className="search-book-btn"
            onClick={(ev) => {
              this.searchBook(ev)
            }}
          >
            Search
          </button>
        </form>
        {booksToShow && bookName && (
          <ul className="google-book-list">
            {booksToShow.map((book, idx) => (
              <GoogleBooks onAddBook={this.onAddBook} key={idx} book={book} />
            ))}
          </ul>
        )}
      </section>
    )
  }
}
