import React, { Component } from 'react';
import Header from './components/Header/';
import Banner from './components/Banner/';
import CategoriesBar from './components/CategoriesBar/';
import NewArrivals from './components/NewArrivals/NewArrivals';
import Deals from './components/Deals/';
import ShippingInformation from './components/ShippingInformation/';
import Footer from './components/Footer/';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <ShippingInformation />
        <Footer />
      </div>
    );
  }
}

export default App;
