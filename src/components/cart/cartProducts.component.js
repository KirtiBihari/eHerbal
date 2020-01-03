import React, { Component } from 'react';


class CartProducts extends Component {
    constructor( props ) {
        super( props );
        

    }

    changeQuantity = (currentCount, id, isPlus) => {
        const count = isPlus ? currentCount + 1: (currentCount > 1 ? currentCount - 1 : currentCount);
        this.props.updateProduct(id, 'update', count)
    };

    render() {
        const {product, updateProduct} = this.props;

        return (
            <tr key={product.id}>
            <th>
                <div className="product_cont">
                <div className="cartItem_img">
                    <img src={product.img} alt="" />
                </div>
                <div>
                    <div className="title">{product.name}</div>
                    <div className="action">
                    <input
                        type="button"
                        value="Remove"
                        className="btn btn-link"
                        onClick={() => updateProduct(product.id, 'delete')}
                    />
                    <input
                        type="button"
                        value="SAVE FOR LATER"
                        className="btn btn-link"
                    />
                    </div>
                </div>
                </div>
            </th>
            <th>
                <div className="input-group">
                    <input type="button" value="-" className="button-minus" data-field="quantity" onClick={() => this.changeQuantity(product.count, product.id, false)} />
                    <input type="number" value={product.count} name="quantity" className="quantity-field" />
                    <input type="button" value="+" className="button-plus" data-field="quantity" onClick={() => this.changeQuantity(product.count, product.id, true)} />
                </div>

            </th>
            <th>
            {product.price * (product.count)}
            </th>
            </tr>
        );
    }
};

export default CartProducts;
