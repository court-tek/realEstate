import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import listingsData from "./data/listingsData";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Courtnez",
      listingsData,
      city: "All",
      homeType: "All",
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'grid',
      search: ''
    }
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  componentWillMount() {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData
    })
  }
  change(event) {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
        this.filteredData();
      }
    );
  }
  changeView(viewName) {
    this.setState({
      view: viewName
    });
  }
  filteredData() {
    let newData = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.rooms >= this.state.bedrooms
      );
    });

    if (this.state.city != "All") {
      newData = newData.filter(item => {
        return item.city == this.state.city;
      });
    }

    if (this.state.homeType != "All") {
      newData = newData.filter(item => {
        return item.homeType == this.state.homeType;
      });
    }
     if (this.state.sortby == 'price-dsc') {
      newData = newData.sort((a,b ) => {
        return a.price - b.price
      })
    }

     if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a,b ) => {
        return b.price - a.price
      })
    }

    if (this.state.search !== '') {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase()
        let searchText = this.state.search.toLowerCase()
        let n = city.match(searchText)



        if (n != null) {
          return true
        }
      })
    }
    this.setState({
      filteredData: newData
    });
  }
  populateForms() {
    // City
    let cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    cities = cities.sort()

    // HomeType
    let homeType = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeType = new Set(homeType)
    homeType = [...homeType]
    homeType = homeType.sort()
    // Bedroom
    let bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeType,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state);
    })
  }
  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
        </section>
      </div>
    );
  }
}

export default Layout;

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)