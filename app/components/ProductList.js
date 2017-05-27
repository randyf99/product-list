import React from 'react';
import { products, generateVoteCount } from '../seed';

function Product(props) {
  return (
      <div className='ui unstackable items'>
        <div className='image'>
          <img src={props.productImageUrl} />
        </div>
        <div className='content'>
          <div className='header'>
            <a>
              <i className='caret' />
            </a>
          </div>
          <div className='description'>
            <a href={props.url}></a>
            <p>{props.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='avatar image'
              src={props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
  );
}

class ProductList extends React.Component {
  render() {
    const product = products[0];
    return (
      <div>
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      </div>
    );
  }
}

export default ProductList;
