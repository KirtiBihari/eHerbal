import React, { Component } from 'react';
import { MDBTable, MDBTableHead } from 'mdbreact';
import CartProducts from './cartProducts.component';

class CartList extends Component {
  constructor( props ) {
    super( props );
    

  }


  render() {
    const { products, total, updateProduct } = this.props;

    return (
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>{total}Items</th>
              <th>QTY</th>
              <th>PRICE</th>
            </tr>
          </MDBTableHead>
          <tbody>
            {products.length > 0 ? (
              products.map(product => (
                <CartProducts
                  product={product}
                  updateProduct={updateProduct}
                  key={product.id}
                />
              ))
            ) : (
              <tr>
                <td> OOPS !!! Something Went wrong</td>
              </tr>
            )}
          </tbody>
        </MDBTable>
        <div className="horizontal" />
        <div className="row">
          <div className="col-md-10">
            <hr />
            <div className="row">
              <div className="col-md-6">SUBTOTAL</div>
              <div className="col-md-6">{this.props.getTotalPriceCall()}</div>
            </div>
            <div className="horizontal" />
            <div>
              <input
                type="button"
                value="CONTINUE SHOPPING"
                className="btn btn-link"
              />
              <input
                type="button"
                value="CHECKOUT"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;
