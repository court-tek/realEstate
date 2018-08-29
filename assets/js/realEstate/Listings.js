import React, {Component} from "react";

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.loopListings = this.loopListings.bind(this);
  }
  loopListings() {
    let {listingsData} = this.props;

    if (listingsData == undefined || listingsData.length == 0) {
      return "Sorry your filter did not match any listing";
    }

    return listingsData.map((listing, index) => {
      // THIS IS THE GRID VIEW
      if (this.props.globalState.view == 'grid') {
        return (<div className="col-xs-12 col-sm-6 col-md-3 listbox" key={index}>
          <div className="listing">
            <div className="listing-img" style={{
                background: `url("${listing.image}") no-repeat center center`
              }}>
              <span className="address" style={{
                  color: "white",
                  fontWieght: 700
                }}>
                {listing.address}
              </span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"/>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">05/08/2018</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="far fa-square"/>
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed"/>
                      <span>{listing.bedrooms}
                        bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn">View Listings</div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location ">
                <i className="fas fa-map-marker"/> {listing.city},{" "}
                {listing.state}
              </span>
            </div>
          </div>
        </div>);
      } else {
        // THIS IS THE LIST VIEW
        return (<div className="col-md-12 col-lg-12 listbox" key={index}>
          <div className="listing">
            <div className="listing-img" style={{
                background: `url("${listing.image}") no-repeat center center`
              }}>
              <span className="address" style={{
                  color: "white",
                  fontWieght: 700
                }}>
                {listing.address}
              </span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"/>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">05/08/2018</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="far fa-square"/>
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed"/>
                      <span>{listing.bedrooms}
                        bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn">View Listings</div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location ">
                <i className="fas fa-map-marker"/> {listing.city},{" "}
                {listing.state}
              </span>
            </div>
          </div>
        </div>);
      }
    });
  }
  render() {
    return (<section id="Listings">
      <section className="search-area">
        <input type="text" name="search" onChange={this.props.change}/>
      </section>

      <section className="sortby-area">
        <div name="results" className="results"> results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={this.props.change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select>
          <div className="view">
          <div style={{ display: 'inline-block', marginRight: '15px', cursor: 'pointer', height: '20px', width: '20px' }} onClick={this.props.changeView.bind(null, 'list')}>
          <i className="fas fa-list"></i>
          </div>
          <div style={{ display: 'inline-block', marginRight: '15px', cursor: 'pointer', height: '20px', width: '20px' }} onClick={this.props.changeView.bind(null, 'grid')}>
          <i className="fas fa-th" ></i>
          </div>
          </div>
        </div>
      </section>

      <section className="row" id="listings-results">
      <div className="">
        {this.loopListings()}
        <div className="clearfix"></div>
        </div>
      </section>

      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li>1</li>
          <li className="active">2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
    </section>);
  }
}

export default Listings;
