import React from 'react';
import { products, generateVoteCount } from '../seed';

function Product(props) {
  return (
      <div className='items'>
        <div className='image'>
          <img src={props.url} />
        </div>
        <div className='content'>
          <div className='header'>
            <a>
              <i className='caret' />
            </a>
            {props.votes}
          </div>
          <div className='description'>
            <a href={props.url}>
              {props.title}
            </a>
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
    const productComponents = products.map((product) => (
        <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
    ));
    return (
      <div className='items'>
        {productComponents}
      </div>
    );
  }
}

export default ProductList;
