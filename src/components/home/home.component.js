'use strict';
import React from 'react';

class Home extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
        }
        

    }


    render() {


        return (
            <div className='home-container d-flex flex-row justify-content-center flex-wrap mt-10 mb-10 ec-home-container'>

                {
                    this.props.productList.length > 0 ? (
                        this.props.productList.map(product => (
                            <div className="card p-4 mr-2 mb-3 card-item ec-card-item" onClick={() => {this.props.handleCardClick(product)}}>
                                <img className="card-img-top item-card-img" src={product.img} alt="Card image cap" />
                                <div class="ec-add-to-cart">
                                    <button class="btn btn-sm btn-primary ec-btn-primary">Add to cart</button>
                                </div>
                                <div className="card-body ec-card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">HK${product.price}</p>
                                </div>
                            </div>
                        ))
                    ) : ''
                }
            </div>
        );
    }
}

Home.defaultProps = {

};

export default Home;