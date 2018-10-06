import React, {Component} from 'react';
import RangeSlider from '../FormControls/RangeSlider/RangeSlider';
import PropTypes from 'prop-types';

class FilterByPrice extends Component {
  constructor(props) {
    super(props);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);

    this.state = {
      currentPriceRange: this.props.defaultRange,
    }
  }

  handleRangeChange(newRange) {
    this.setState({currentPriceRange: newRange});
  }

  handleFilterClick() {
    const {onRangeChange} = this.props;
    if (onRangeChange) {
      onRangeChange(this.state.currentPriceRange);
    }
  }

  render() {
    const {currentPriceRange} = this.state;
    const {defaultRange, max} = this.props;

    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Filter by Price</h5>
        </div>

        <p id="amount" style={{border: 0, color: '#f6931f', fontWeight: 'bold'}}>
          ${currentPriceRange[0]} - ${currentPriceRange[1]}
        </p>

        <RangeSlider
          max={max}
          defaultRange={defaultRange}
          onChange={this.handleRangeChange}
        />

        <div className="filter_button" onClick={this.handleFilterClick}><span>filter</span></div>
      </div>
    );
  }
}

FilterByPrice.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultRange: PropTypes.array,
  onRangeChange: PropTypes.func,
};

FilterByPrice.defaultProps = {
  min: 0,
  max: 100,
  defaultRange: [0, 30],
  onRangeChange: null,
};

export default FilterByPrice;
