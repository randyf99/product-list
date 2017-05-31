import React from 'react';
import { products, generateVoteCount } from '../seed';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
        <div className='items'>
          <div className='image'>
            <img src={this.props.productImageUrl} />
          </div>
          <div className='content'>
            <div className='header'>
              <a onClick={this.handleUpVote}>
                <img src={this.props.productImageUrl} />
              </a>
              {this.props.votes}
            </div>
            <div className='description'>
              <a href={this.props.url}>
                {this.props.title}
              </a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
  }
}

class ProductList extends React.Component {
  constructor (props) {
    super(props);

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  handleProductUpVote(productId) {
    console.log(`${productId} was upvoted.`);
  }

  render() {
    const sortedProducts = products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = sortedProducts.map((product) => (
        <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote}
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
