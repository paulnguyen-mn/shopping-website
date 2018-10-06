import React, {Component} from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumbs d-flex flex-row align-items-center">
        <ul>
          <li><a href="#">Home</a></li>
          <li className="active">
            <a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Men's</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Breadcrumb;



