import React, {Component} from 'react';

class ProductCategories extends Component {
  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul className="sidebar_categories">
          <li><a href="#">Men</a></li>
          <li className="active">
            <a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>Women</a>
          </li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </div>
    );
  }
}

export default ProductCategories;
