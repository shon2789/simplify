import { LongTxt } from "../cmps/long-txt.jsx"
import { ReviewAdd } from "../cmps/review-add.jsx"
import { bookService } from "../services/book.service.js"

export class BookDetails extends React.Component {
  state = {
    isLongTxtShown: false,
    book: null,
    isReviewModalOpen: false,
  }

  componentDidMount() {
    this.loadBook()
  }

  loadBook = () => {
    const id = this.props.match.params.bookId
    bookService.getBookById(id).then((book) => {
      if (!book) this.props.history.push("/book")
      this.setState({ book })
    })
  }

  onReadMore = () => {
    this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
  }

  onBack = () => {
    this.props.history.push("/book")
  }

  toggleAddReviewModal = () => {
    this.setState({ isReviewModalOpen: !this.state.isReviewModalOpen })
  }

  render() {
    const { book, isReviewModalOpen } = this.state
    if (!book) return <div>Loading....</div>
    let readDuration
    let priceRange
    let year = new Date().getFullYear()
    let bookRelease
    let currency
    const bookDesc = book.description

    if (book.pageCount > 500) {
      readDuration = "Long Reading"
    } else if (book.pageCount > 200) {
      readDuration = "Decent Reading"
    } else if (book.pageCount > 100) {
      readDuration = "Light Reading"
    } else {
      readDuration = "Short Reading"
    }

    if (book.listPrice.amount > 150) {
      priceRange = "red-price"
    } else if (book.listPrice.amount < 20) {
      priceRange = "green-price"
    }

    if (year - book.publishedDate > 10) {
      bookRelease = "Veteran Book"
    } else if (year - book.publishedDate <= 1) {
      bookRelease = "New Book"
    }

    switch (book.listPrice.currencyCode) {
      case "ILS":
        currency = "₪"
        break
      case "USD":
        currency = "$"
        break
      case "EUR":
        currency = "€"
        break
    }

    return (
      <div className="book-detailes-container main-layout">
        <section className="book-details ">
          <div className="book-details-content">
            <img className="book-img" src={`${book.thumbnail}`} alt="" />
            <div className="book-txt-content">
              <h1 className="book-title">{book.title}</h1>
              <h2 className="book-title-detailes">{book.subtitle}</h2>
              <p>
                {" "}
                <span className="bold">Written By: </span>
                {book.authors.join(", ")}
              </p>
              <p className={`${priceRange}`}>
                <span className="bold">Price: </span> {book.listPrice.amount}
                {currency}
              </p>
              {bookRelease && (
                <p>
                  <span className="bold">Book Type: </span>
                  {bookRelease}
                </p>
              )}
              <p>
                <span className="bold">Categories: </span>
                {book.categories.join(", ")}
              </p>
              <p>
                <span className="bold">Language: </span> {book.language}
              </p>
              <p>
                <span className="bold">Publish Date: </span>{" "}
                {book.publishedDate}
              </p>
              <p>
                <span className="bold">Reading Duration: </span> {readDuration}
              </p>
              <section>
                {!this.state.isLongTxtShown && (
                  <p>
                    <span className="about-book-title">About: </span>
                    {bookDesc.length > 100
                      ? bookDesc.substring(0, 100) + "..."
                      : bookDesc}
                  </p>
                )}
                {this.state.isLongTxtShown && <LongTxt text={bookDesc} />}
              </section>
              <div className="btns">
                <button className="go-back" onClick={this.onBack}>
                  Go Back
                </button>
                {bookDesc.length > 100 && (
                  <button className="go-back" onClick={this.onReadMore}>
                    {this.state.isLongTxtShown ? "Show Less" : "Show More"}
                  </button>
                )}
                <button className="go-back" onClick={this.toggleAddReviewModal}>
                  Add Review
                </button>
              </div>
            </div>
          </div>

          <ReviewAdd
            book={book}
            toggleAddReviewModal={this.toggleAddReviewModal}
            isReviewModalOpen={isReviewModalOpen}
          />
        </section>
      </div>
    )
  }
}
