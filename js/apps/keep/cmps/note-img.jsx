export function NoteImg({ title, img }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <img className="note-img" src={img} alt="" />
    </React.Fragment>
  )
}
