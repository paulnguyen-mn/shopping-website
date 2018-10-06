import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

class ProductsList extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col products-list">
          {this.props.productsList.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  productsList: PropTypes.array,
};

ProductCard.defaultProps = {
  productsList: [],
};

export default ProductsList;
