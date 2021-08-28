const { Link } = ReactRouterDOM

export function BookPreview({ book }) {
  let currency

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
    <Link to={`/book/${book.id}`}>
      <div className="book-preview pointer">
        <p className="book-preview-title">{book.title}</p>
        <img className="book-preview-img" src={`${book.thumbnail}`} alt="" />
        <p className="book-preview-price">
          {book.listPrice.amount}
          {currency}
        </p>
      </div>
    </Link>
  )
}
