import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TopFilter extends Component {
  constructor(props) {
    super(props);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.setupDropDownListData();

    this.state = {
      selectedSortBy: this.sortByOptions[0],
      selectedPageSize: this.pageSizeOptions[0],
    }
  }

  setupDropDownListData() {
    this.sortByOptions = [
      {
        text: 'Default sorting',
        value: 'id',
      },
      {
        text: 'Price',
        value: 'salePrice',
      },
      {
        text: 'Product name',
        value: 'name',
      }
    ];

    this.pageSizeOptions = [
      {
        text: '6',
        value: 6,
      },
      {
        text: '12',
        value: 12,
      },
      {
        text: '24',
        value: 24,
      }
    ];
  }

  handleSortByChange(sortBy) {
    this.setState({selectedSortBy: sortBy});

    const {onSortByChange} = this.props;
    if (onSortByChange) {
      onSortByChange(sortBy.value);
    }
  }

  handlePageSizeChange(pageSize) {
    this.setState({selectedPageSize: pageSize});

    const {onPageSizeChange} = this.props;
    if (onPageSizeChange) {
      onPageSizeChange(pageSize.value);
    }
  }

  renderSortByList() {
    const {selectedSortBy} = this.state;
    return (
      <li>
        <span className="type_sorting_text">{selectedSortBy.text}</span>
        <i className="fa fa-angle-down" />
        <ul className="sorting_type">
          {this.sortByOptions.map(sortBy => (
            <li key={sortBy.value} className="type_sorting_btn" onClick={() => this.handleSortByChange(sortBy)}>
              <span>{sortBy.text}</span>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  renderPageSizeList() {
    const {selectedPageSize} = this.state;
    return (
      <li>
        <span>Show</span>
        <span className="num_sorting_text">{selectedPageSize.value}</span>
        <i className="fa fa-angle-down" />
        <ul className="sorting_num">
          {this.pageSizeOptions.map(pageSize => (
            <li key={pageSize.value} className="num_sorting_btn" onClick={() => this.handlePageSizeChange(pageSize)}>
              <span>{pageSize.text}</span>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  render() {
    return (
      <div className="product_sorting_container product_sorting_container_top">
        <ul className="product_sorting">
          {this.renderSortByList()}
          {this.renderPageSizeList()}
        </ul>

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
          <div id="next_page" className="page_next">
            <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    );
  }
}

TopFilter.propTypes = {
  onSortByChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
};

TopFilter.defaultProps = {
  onSortByChange: null,
  onPageSizeChange: null,
};

export default TopFilter;


