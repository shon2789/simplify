import { BookPreview } from "./book-preview.jsx"

export function BookList({ books, onSelectBook }) {
  return (
    <div className="books-container">
      <div className="book-list main-layout">
        {books.map((book) => (
          <BookPreview key={book.id} book={book} />
        ))}
        {/* {books.map(book => <BookPreview key={book.id} book={book} onSelectBook={onSelectBook} />)} */}
      </div>
    </div>
  )
}
