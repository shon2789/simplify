import { noteService } from "../services/note.service.js"

export function NoteTodos({ label, todos, id, loadNotes }) {
  const handleTodos = (todo, todoIdx, noteId) => {
    const isDone = todo.doneAt
    noteService.removeTodo(isDone, todoIdx, noteId)
    loadNotes()
  }

  return (
    <React.Fragment>
      <h1>{label}</h1>
      {todos.map((todo, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              handleTodos(todo, idx, id)
            }}
            className="todo-container"
          >
            <p className={`${todo.doneAt ? "active" : ""}`}>{todo.txt}</p>
            {!todo.doneAt && <i className="far fa-square check-box"></i>}
            {todo.doneAt && <i className="fas fa-check-square check-box"></i>}
          </div>
        )
      })}
    </React.Fragment>
  )
}
