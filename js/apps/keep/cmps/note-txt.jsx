export function NoteTxt({ txt, subject }) {
  return (
    <React.Fragment>
      {subject && <h1>{subject}</h1>}
      <p>{txt}</p>
    </React.Fragment>

  )
}
