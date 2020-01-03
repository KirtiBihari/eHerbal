'use strict';
import React from 'react';

class Header extends React.Component {

    constructor( props ) {
        super( props );

    }

    render() {

        return (
            <div className='header-container'>
                 {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  */}
                <nav className="navbar navbar-expand-lg navbar-dark ec-navbar">
                    <a className="navbar-brand" href="#">EHerbal.com</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <a className="nav-link ec-visibilityHidden" href="#">About</a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2 ec-visibilityHidden" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-info my-2 my-sm-0 ec-visibilityHidden" type="submit">Search</button>
                            <button className="btn btn-outline-info my-2 my-sm-0 ml-2 cart-btn ec-cart-btn" type="button" onClick={() => {this.props.goToCartClick()}}>
                                <i class="fa fa-shopping-cart"></i>
                                { this.props.cartItemCount > 0 && <span className="badge">{this.props.cartItemCount}</span> }
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.defaultProps = {

};

export default Header;