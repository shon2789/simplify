export function Screen({ isOpen, exitEdit }) {
  return (
    <div
      onClick={() => {
        exitEdit(false)
      }}
      className={`screen ${isOpen ? "screen-active" : ""}`}
    ></div>
  )
}
