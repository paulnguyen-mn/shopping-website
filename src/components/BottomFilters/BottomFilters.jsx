import React, {Component} from 'react';

class BottomFilters extends Component {
  render() {
    return (
      <div className="product_sorting_container product_sorting_container_bottom clearfix">
        <ul className="product_sorting">
          <li>
            <span>Show:</span>
            <span className="num_sorting_text">04</span>
            <i className="fa fa-angle-down" />
            <ul className="sorting_num">
              <li className="num_sorting_btn"><span>01</span></li>
              <li className="num_sorting_btn"><span>02</span></li>
              <li className="num_sorting_btn"><span>03</span></li>
              <li className="num_sorting_btn"><span>04</span></li>
            </ul>
          </li>
        </ul>

        <span className="showing_results">Showing 1–3 of 12 results</span>
        <div className="pages d-flex flex-row align-items-center">
          <div className="page_current">
            <span>1</span>
            <ul className="page_selection">
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </div>
          <div className="page_total"><span>of</span> 3</div>
          <div id="next_page_1" className="page_next">
            <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
        </div>
      </div>
    );
  }
}

export default BottomFilters;


