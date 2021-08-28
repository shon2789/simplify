export class BookReviews extends React.Component {
  render() {
    const { book, review } = this.props

    return (
      <div className="review-container">
        <div className="review-rate-container">
          <h2>{review.name}</h2>
          <p>{review.rate}</p>
        </div>
        <p>"{review.text}"</p>
        <p className="review-date">{review.date}</p>
        <div
          onClick={() => {
            this.props.onDeleteReview(book.id, this.props.idx)
          }}
          className="delete-review"
        >
          X
        </div>
      </div>
    )
  }
}
