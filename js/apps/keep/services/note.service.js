import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const noteService = {
  query,
  getNoteById,
  deleteNote,
  addNote,
}

let gNotes = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby! ",
    },
  },
  {
    id: "n102",
    type: "note-img",
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
  const newNote = {
    id: utilService.makeId(),
    type: note.type,
    isPinned: false,
    info: {
      txt: note.txt,
    },
  }

  gNotes.push(newNote)
  _saveNotesToStorage()
}

function _saveNotesToStorage() {
  storageService.saveToStorage("notesDB", gNotes)
}
