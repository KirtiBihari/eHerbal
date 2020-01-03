'use strict';
import React from 'react';

class ProductDetails extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            productInfo: props.itemInfo,
            selectedQuantity: 1
        }
    }

    changeQuantity = (e) => {
        this.setState({selectedQuantity: e.target.value});
    }

    render() {
        const { productInfo } = this.state;
        const quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <div className='d-flex flex-row justify-content-around flex-wrap mt-10 mb-10'>
                <div className='d-flex img-container justify-content-center'>
                    <img className="product-img" src={productInfo.img} alt="Product image" />
                </div>
                <div className='d-flex desc-container align-items-start flex-column'>
                    <h3>Product Details:</h3>
                    <br />
                    <h5>{productInfo.name}</h5>
                    <p>{productInfo.desc}</p>
                    <br />
                    <h4>Ingredients:</h4>
                    <ul>
                    { productInfo.Ingredients.map(i => <li className='ingredientList'>{i}</li>) }
                    </ul>
                </div>
                <div className='d-flex price-container align-items-center flex-column'>
                        <p><label>Price : </label> <span>{productInfo.price}</span></p>
                        <p>
                            <label>Quantity : </label>
                            <select className='ml-2' onChange={(e) => this.changeQuantity(e)} value={this.state.selectedQuantity}>
                                { quantityList.map(item => <option value={item}>{item}</option>) }
                            </select>
                        
                        </p>
                        <div className='d-flex flex-column justify-content-between flex-wrap btn-container'>
                            <button type="button" className="btn btn-secondary" onClick={() => this.props.updateProduct(productInfo.id, 'add', parseInt(this.state.selectedQuantity))}>Add to cart</button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.props.goToCartClick()}>Go to cart</button>
                        </div>
                        
                    </div>
                
            </div>
        );
    }
}

ProductDetails.defaultProps = {

};

export default ProductDetails;