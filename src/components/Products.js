import React, { Component } from 'react';

class Products extends Component {
    render() {

        console.log('HELLO', this.props);

        return (
            <div>
              <h1>Products......!</h1>  
            </div>
        );
    }
}

export default Products;