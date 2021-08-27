export function Screen({ isOpen, exitScreen }) {
  return (
    <div
      onClick={() => {
        exitScreen(false)
      }}
      className={`screen ${isOpen ? "screen-active" : ""}`}
    ></div>
  )
}
