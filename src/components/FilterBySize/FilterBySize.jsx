import React, {Component} from 'react';

class FilterBySize extends Component {
  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Size</h5>
        </div>

        <ul className="checkboxes">
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>XS</span></li>
          <li className="active"><i className="fa fa-square" aria-hidden="true" /><span>S</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>M</span></li>
        </ul>
      </div>
    );
  }
}

export default FilterBySize;
