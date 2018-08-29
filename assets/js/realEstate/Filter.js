import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Courtnez",
      hobbies: ["Sports", "Coding"]
    }
    this.cities = this.cities.bind(this);
    this.homeType = this.homeType.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  componentWillMount() {
    this.props.populateAction()
  }
  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      let { cities } = this.props.globalState.populateFormsData
      return cities.map((item) => {
        return <option key={item} value={item}>{item}</option>
      })
      return this.props.globalState
    }
  }
  homeType() {
    if (this.props.globalState.populateFormsData.homeType != undefined) {
      let { homeType } = this.props.globalState.populateFormsData
      return homeType.map((item) => {
        return <option key={item} value={item}>{item}</option>
      })
      return this.props.globalState
    }

  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      let { bedrooms } = this.props.globalState.populateFormsData
      return bedrooms.map((item) => {
        return <option key={item} value={item}>{item}+ BR</option>
      })
      return this.props.globalState
    }
  }
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <div className="home">
          <select
            name="city"
            className="filters city"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            {this.cities()}
          </select>
          <select
            name="homeType"
            className="filters homeType"
            onChange={this.props.change}
          >
            <option value="All">All Homes</option>
            {this.homeType()}
          </select>
          <select
            name="bedrooms"
            className="filters bedrooms"
            onChange={this.props.change}>
            {this.bedrooms()}
          </select>
          </div>
          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min_price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max_price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min_floor_space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max_floor_space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input
                name="elevator"
                value="elevator"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Swimmiing Pool</span>
              <input
                name="swimmiing_pool"
                value="swimmiing_pool"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input
                value="finished_basement"
                name="finished_basement"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input
                name="gym"
                value="gym"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
