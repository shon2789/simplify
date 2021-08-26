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
    id: "n100",
    type: "note-todos",
    isPinned: true,
    color: "F0EEEE",
    info: {
      label: "Water is important!",
      todos: [
        { txt: "Drink water", doneAt: 187111111 },
        { txt: "Drink water", doneAt: 187111113 },
        { txt: "Drink water", doneAt: 187111112 },
        { txt: "Drink water", doneAt: null },
      ],
    },
  },
  {
    id: "n198",
    type: "note-video",
    isPinned: true,
    color: "#89EB89",
    info: {
      url: "https://www.youtube.com/watch?v=EJtmfkKulNA",
    },
  },

  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    color: "#DF5E5E",
    info: {
      txt: "The road to success is always under construction.",
    },
  },
  {
    id: "n102",
    type: "note-img",
    isPinned: false,
    color: "F0EEEE",
    info: {
      url: "https://www.zenrooms.com/blog/wp-content/uploads/2020/05/funny-cats-2.jpg",
      title: "Cute cats",
    },
  },

  {
    id: "n104",
    type: "note-img",
    isPinned: true,
    color: "F0EEEE",
    info: {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "We love coffee!",
    },
  },
  {
    id: "n105",
    type: "note-todos",
    isPinned: true,
    color: "#7BE1EE",
    info: {
      label: "",
      todos: [
        { txt: "Listen to music", doneAt: 187111118 },
        { txt: "Play some music", doneAt: 187111115 },
        { txt: "Code", doneAt: 187111117 },
        { txt: "Take a ride", doneAt: null },
        { txt: "Sport!!!", doneAt: null },
        { txt: "Take a walk", doneAt: null },
      ],
    },
  },
  {
    id: "n106",
    type: "note-video",
    isPinned: false,
    color: "F0EEEE",
    info: {
      url: "https://www.youtube.com/watch?v=neV3EPgvZ3g",
    },
  },
  {
    id: "n107",
    type: "note-todos",
    isPinned: false,
    color: "#FA81E6",
    info: {
      label: "wooohoooo",
      todos: [
        { txt: "Is Yossi the cutest cat in the world?", doneAt: 187111111 },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
  {
    id: "n108",
    type: "note-img",
    isPinned: true,
    color: "#7BE1EE",
    info: {
      url: "https://media-exp1.licdn.com/dms/image/C5603AQG3Sbj0ovAutQ/profile-displayphoto-shrink_800_800/0/1628494662469?e=1635379200&v=beta&t=VYEAZ5y-8RouhU1zm_q8j7vfuL0ms5OE_2Olkm492T4",
      title: "wooohoooo",
    },
  },
  {
    id: "109",
    type: "note-img",
    isPinned: true,
    color: "F0EEEE",
    info: {
      url: "https://media-exp1.licdn.com/dms/image/C5603AQG0aGuApw0TsQ/profile-displayphoto-shrink_200_200/0/1625749045552?e=1635379200&v=beta&t=U-457jnG4wQNI3IJ_A05kNwydJrHjpLnT0I5LyCHqgg",
      title: "wooohoooo",
    },
  },
  {
    id: "110",
    type: "note-txt",
    isPinned: false,
    color: "#DF5E5E",
    info: {
      txt: "Do you like jazz?",
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
