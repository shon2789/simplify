export function GoogleBooks({ book, onAddBook }) {
  return (
    <li className="google-book">
      {book.volumeInfo.title}{" "}
      <i
        onClick={() => {
          onAddBook(book)
        }}
        className="fas fa-plus-circle"
      ></i>
    </li>
  )
}
