import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const noteService = {
  query,
  getNoteById,
  deleteNote,
  addNote,
  removeTodo,
  addCopyNote,
  checkPinnedNotes,
  toggleNotePin,
  changeNoteColor,
  getPlaceHolderTxt,
  formatNoteByType,
}

let gNotes = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    color: "F0EEEE",
    info: {
      txt: "Fullstack Me Baby! ",
    },
  },
  {
    id: "n102",
    type: "note-img",
    isPinned: false,
    color: "F0EEEE",
    info: {
      url: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      title: "Bobi and Me",
    },
    style: {
      backgroundColor: "#00d",
    },
  },
  {
    id: "n103",
    type: "note-todos",
    isPinned: false,
    color: "F0EEEE",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
  {
    id: "n104",
    type: "note-todos",
    isPinned: false,
    color: "F0EEEE",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
  {
    id: "n105",
    type: "note-todos",
    isPinned: false,
    color: "F0EEEE",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
  {
    id: "n106",
    type: "note-todos",
    isPinned: false,
    color: "F0EEEE",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
  {
    id: "n107",
    type: "note-todos",
    isPinned: false,
    color: "F0EEEE",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
]

_createNotes()

function _createNotes() {
  var notes = storageService.loadFromStorage("notesDB")
  if (!notes || !notes.length) {
    notes = gNotes
  }
  gNotes = notes
  _saveNotesToStorage()
}

function query(filterBy = "") {
  return Promise.resolve(gNotes)
}

function getNoteById(noteId) {
  var note = gNotes.find((note) => {
    return noteId === note.id
  })
  return Promise.resolve(note)
}

function deleteNote(noteId) {
  const noteIdx = gNotes.findIndex((note) => {
    return note.id === noteId
  })

  gNotes.splice(noteIdx, 1)
  _saveNotesToStorage()
}

function addNote(note) {
  console.log(note)

  let newNote
  if (note.type === "note-txt") {
    newNote = {
      id: utilService.makeId(),
      type: note.type,
      isPinned: false,
      info: {
        txt: note.txt,
      },
    }
  }
  if (note.type === "note-img") {
    newNote = {
      id: utilService.makeId(),
      type: note.type,
      isPinned: false,
      info: {
        url: note.txt,
        title: "",
      },
    }
  }
  if (note.type === "note-video") {
    newNote = {
      id: utilService.makeId(),
      type: note.type,
      isPinned: false,
      info: {
        url: note.txt,
      },
    }
  }
  if (note.type === "note-todos") {
    const formattedTodos = formatTodoStr(note.txt)
    console.log(formattedTodos)

    newNote = {
      id: utilService.makeId(),
      type: note.type,
      isPinned: false,
      info: {
        label: "",
        todos: formattedTodos,
      },
    }
  }
  gNotes.push(newNote)
  _saveNotesToStorage()
  return Promise.resolve()
}

function formatNoteByType(noteId, newTxt) {
  const noteIdx = gNotes.findIndex((note) => {
    return note.id === noteId
  })

  const noteType = gNotes[noteIdx].type

  if (noteType === "note-txt") {
    gNotes[noteIdx].info.txt = newTxt
  }

  if (noteType === "note-img" || noteType === "note-video") {
    gNotes[noteIdx].info.url = newTxt
  }

  if (noteType === "note-todos") {
    const formattedTodos = formatTodoStr(newTxt)
    gNotes[noteIdx].info.todos = formattedTodos
  }

  _saveNotesToStorage()
}

function addCopyNote(note) {
  const newNote = JSON.parse(JSON.stringify(note))
  newNote.id = utilService.makeId()
  gNotes.push(newNote)
  _saveNotesToStorage()
  return Promise.resolve()
}

function removeTodo(isTodoDone, todoIdx, noteId) {
  const noteIdx = gNotes.findIndex((note) => {
    return noteId === note.id
  })

  gNotes[noteIdx].info.todos[todoIdx].doneAt = !isTodoDone
  _saveNotesToStorage()
}

function checkPinnedNotes() {
  return gNotes.some((note) => {
    return note.isPinned
  })
}

function toggleNotePin(noteId) {
  const noteIdx = gNotes.findIndex((note) => {
    return note.id === noteId
  })

  gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned
  _saveNotesToStorage()
}

function changeNoteColor(noteId, noteColor) {
  const noteIdx = gNotes.findIndex((note) => {
    return note.id === noteId
  })

  gNotes[noteIdx].color = `${noteColor}`
  _saveNotesToStorage()
}

function formatTodoStr(txt) {
  console.log(txt)
  const enteredTodos = txt.split(",")

  const formattedTodos = []

  enteredTodos.forEach((todo) => {
    console.log(todo)
    formattedTodos.push({ txt: todo, doneAt: null })
  })
  return formattedTodos
}

function getPlaceHolderTxt(noteType) {
  if (noteType === "note-txt") return "Enter a note..."
  if (noteType === "note-img") return "Enter image URL..."
  if (noteType === "note-video") return "Enter video URL..."
  if (noteType === "note-todos") {
    return "Enter comma separated list..."
  }
}

function _saveNotesToStorage() {
  storageService.saveToStorage("notesDB", gNotes)
}
