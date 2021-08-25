import { noteService } from "../services/note.service.js"

export function NoteTodos({ label, todos }) {
  const handleTodos = (a, s) => {
    console.log(a)
  }

  return (
    <React.Fragment>
      <h1>{label}</h1>
      {todos.map((todo, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              handleTodos(todo, idx)
            }}
            className="todo-container"
          >
            {todo.txt}
            {!todo.doneAt && <i className="far fa-square check-box"></i>}
            {todo.doneAt && <i className="fas fa-check-square check-box"></i>}
          </div>
        )
      })}
    </React.Fragment>
  )
}
