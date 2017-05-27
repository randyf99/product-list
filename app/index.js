import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
import ProductList from './components/ProductList';

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
)
