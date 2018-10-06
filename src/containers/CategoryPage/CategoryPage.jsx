import React, {Component} from 'react';
import _ from 'lodash';

import Header from '../../components/Header';
import ShippingInformation from '../../components/ShippingInformation';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import FilterByPrice from '../../components/FilterByPrice/FilterByPrice';
import TopFilter from '../../components/TopFilters/TopFilters';
import BottomFilters from '../../components/BottomFilters/BottomFilters';
import ProductsList from '../../components/ProductsList/ProductsList';

import productsList from '../../data/products';
import categories from '../../data/categories';
import FilterBySize from '../../components/FilterBySize/FilterBySize';
import FilterByColor from '../../components/FilterByColor/FilterByColor';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedProducts: [],
    };

    // default value
    // current state to compare with the new state
    this.selectedPriceRange = [0, 500];
    this.selectedPageSize = 8;
    this.sortBy = 'id';

    this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
  }

  componentDidMount() {
    this.updateProductsList();
  }


  updateProductsList() {
    let products = [...productsList];

    // Filter
    // by price
    // by page size
    const minPrice = this.selectedPriceRange[0];
    const maxPrice = this.selectedPriceRange[1];
    products = products
      .filter(product => product.salePrice >= minPrice && product.salePrice <= maxPrice)
      .slice(0, this.selectedPageSize);

    // Sorting
    products = _.sortBy(products, this.sortBy);

    // Update products list state
    this.setState({renderedProducts: products});
  }

  handlePriceRangeChange(newRange) {
    // Only apply if changes
    if (this.selectedPriceRange[0] !== newRange[0] || this.selectedPriceRange[1] !== newRange[1]) {
      // Update new price range and trigger updating products list
      this.selectedPriceRange = [...newRange];
      this.updateProductsList();
    }
  }

  handlePageSizeChange(pageSize) {
    if (this.selectedPageSize !== pageSize) {
      this.selectedPageSize = pageSize;
      this.updateProductsList();
    }
  }

  handleSortByChange(sortBy) {
    if (this.sortBy !== sortBy) {
      this.sortBy = sortBy;
      this.updateProductsList();
    }
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container product_section_container">
          <div className="row">
            <div className="col product_section clearfix">
              <Breadcrumb />

              <div className="sidebar">
                <ProductCategories categories={categories} />
                <FilterByPrice
                  max={1000}
                  defaultRange={this.selectedPriceRange}
                  onRangeChange={this.handlePriceRangeChange}
                />
                <FilterBySize />
                <FilterByColor />
              </div>

              <div className="main_content">
                <TopFilter onPageSizeChange={this.handlePageSizeChange} onSortByChange={this.handleSortByChange} />
                <div className="product-grid">
                  <ProductsList productsList={this.state.renderedProducts} />
                </div>
                <BottomFilters />
              </div>
            </div>
          </div>
        </div>

        <ShippingInformation />
        <Footer />
      </div>
    );
  }
}

export default CategoryPage;
