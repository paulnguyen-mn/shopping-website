import React, {Component} from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import 'rc-slider/assets/index.css';
import './RangeSlider.css';

const Range = Slider.Range;

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.handleAfterChange = this.handleAfterChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newRange) {
    const {onChange} = this.props;
    if (onChange) {
      onChange(newRange);
    }
  }

  handleAfterChange(newRange) {
    const {onAfterChange} = this.props;
    if (onAfterChange) {
      onAfterChange(newRange);
    }
  }

  render() {
    const {min, max, defaultRange} = this.props;

    return (
      <Range
        allowCross={false}
        min={min}
        max={max}
        defaultValue={defaultRange}
        onChange={this.handleChange}
        onAfterChange={this.handleAfterChange}
      />
    );
  }
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultRange: PropTypes.array,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  defaultRange: [0, 30],
  onChange: null,
  onAfterChange: null,
};

export default RangeSlider;
