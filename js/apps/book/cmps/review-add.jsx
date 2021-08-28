import { bookService } from "../services/book.service.js"
import { utilService } from "../../../services/util.service.js"
import { BookReviews } from "./book-reviews.jsx"
import { Screen } from "../../keep/cmps/screen.jsx"

export class ReviewAdd extends React.Component {
  state = {
    review: {
      name: "Books Reader",
      rate: "",
      date: utilService.getDate(),
      text: "",
    },
    addedReviews: bookService.getBookReviews(this.props.book.id),
  }

  handleChange = (ev) => {
    const field = ev.target.name
    const value =
      ev.target.type === "number" ? +ev.target.value : ev.target.value
    this.setState(
      { review: { ...this.state.review, [field]: value } },
      () => {}
    )
  }

  onAddReview = (ev) => {
    ev.preventDefault()
    bookService.addReview(this.state.review, this.props.book.id)
    this.setState({
      addedReviews: bookService.getBookReviews(this.props.book.id),
    })

    this.props.toggleAddReviewModal()
  }

  onDeleteReview = (bookId, reviewIdx) => {
    bookService.deleteReview(bookId, reviewIdx)
    this.setState({
      addedReviews: bookService.getBookReviews(this.props.book.id),
    })
  }

  render() {
    const { name, rate, date, text } = this.state.review
    const { addedReviews } = this.state

    return (
      <section>
        <Screen
          isOpen={this.props.isReviewModalOpen}
          exitScreen={this.props.toggleAddReviewModal}
        />
        <form
          className={`review-form ${
            this.props.isReviewModalOpen && "show-review-form"
          }`}
        >
          <label htmlFor="name">Full Name: </label>
          <input
            name="name"
            type="text"
            value={name}
            id="name"
            onChange={this.handleChange}
          />

          <label htmlFor="rate">Rate: </label>
          <select
            name="rate"
            type="text"
            value={rate}
            id="rate"
            onChange={this.handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="date-read">Read Date: </label>
          <input
            value={date}
            type="date"
            name="date"
            id="date-read"
            onChange={this.handleChange}
          />

          <label htmlFor="text">Your Opinion: </label>
          <textarea
            value={text}
            type="textarea"
            id="text"
            name="text"
            onChange={this.handleChange}
          />
          <button
            onClick={(ev) => {
              this.onAddReview(ev)
            }}
            className="go-back"
          >
            Submit
          </button>
        </form>
        <div className="book-reviews">
          {addedReviews.map((review, idx) => (
            <BookReviews
              onDeleteReview={this.onDeleteReview}
              key={idx}
              review={review}
              book={this.props.book}
            />
          ))}
        </div>
      </section>
    )
  }
}
