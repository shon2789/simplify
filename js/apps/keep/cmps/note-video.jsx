export function NoteVideo({ video }) {
  return (
    <React.Fragment>
      <iframe
        width="200"
        height="200"
        src={`https://www.youtube.com/embed/${video.split("=")[1]}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </React.Fragment>
  )
}
