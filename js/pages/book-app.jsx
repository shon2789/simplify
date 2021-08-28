import { bookService } from "../apps/book/services/book.service.js"
import { BookList } from "../apps/book/cmps/book-list.jsx"
import { BookFilter } from "../apps/book/cmps/book-filter.jsx"
import { BookAdd } from "../apps/book/cmps/book-add.jsx"

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
    selectedBook: null,
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books })
    })
  }

  onSelectBook = (book) => {
    this.setState({ selectedBook: book })
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks)
  }

  render() {
    const { books } = this.state
    return (
      <section className="book-app main-layout">
        <div className="filter-search-container">
          <BookFilter onSetFilter={this.onSetFilter} />
          <BookAdd loadBooks={this.loadBooks} />
        </div>
        <BookList books={books} onSelectBook={this.onSelectBook} />
      </section>
    )
  }
}
