export function NoteColors({ changeNoteColor, noteId, isPallateClicked }) {
  return (
    <div className={`${isPallateClicked ? "shown" : "hidden"} note-colors`}>
      <div
        onClick={() => {
          changeNoteColor(noteId, "#DF5E5E")
        }}
        className="color red"
      ></div>
      <div
        onClick={() => {
          changeNoteColor(noteId, "#89EB89")
        }}
        className="color green"
      ></div>
      <div
        onClick={() => {
          changeNoteColor(noteId, "#7BE1EE")
        }}
        className="color blue"
      ></div>
      <div
        onClick={() => {
          changeNoteColor(noteId, "#F0EEEE")
        }}
        className="color white"
      ></div>
      <div
        onClick={() => {
          changeNoteColor(noteId, "#FA81E6")
        }}
        className="color purple"
      ></div>
    </div>
  )
}
