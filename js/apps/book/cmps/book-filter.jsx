export class BookFilter extends React.Component {
  state = {
    filterBy: {
      name: "",
      minPrice: "",
      maxPrice: "",
    },
  }

  handleChange = (ev) => {
    const field = ev.target.name
    const value =
      ev.target.type === "number" ? +ev.target.value : ev.target.value
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.onSetFilter(this.state.filterBy)
      }
    )
  }

  render() {
    const { name, minPrice, maxPrice } = this.state.filterBy
    return (
      <div className="form-container">
        {/* <h2>Filter By:</h2> */}
        <form className="form">
          <input
            name="name"
            type="text"
            value={name}
            id="by-name"
            placeholder="Book Name"
            onChange={this.handleChange}
          />

          <input
            name="minPrice"
            type="number"
            value={minPrice}
            id="min-price"
            onChange={this.handleChange}
            placeholder="Min-Price"
          />

          <input
            name="maxPrice"
            type="number"
            value={maxPrice}
            id="max-price"
            onChange={this.handleChange}
            placeholder="Max-Price"
          />
        </form>
      </div>
    )
  }
}
