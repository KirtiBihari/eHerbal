/* eslint-disable no-unused-vars */
'use strict';
import React from 'react';
import HeaderComponent from '../header/header.component';
import HomeComponent from '../home/home.component';
import FooterComponent from '../footer/footer.component';
import ProductDetails from '../productDetails/productDetails.component';
import CartList from '../cart/cartList.component';

class Main extends React.Component {

    constructor( props ) {
        super( props );
        this.state ={
            currentPage: 'home',
            currentItem: {},
            products: [
                { 'id': '01', 'name': 'Bleminor', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '450.00', 'rating':'4', 'img': require('../../assets/images/bleminor_1024x1024.png') },
                { 'id': '02', 'name': 'Geen Tea', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '410.00', 'rating':'5', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '03', 'name': 'Lukol Tablets', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '520.00', 'rating':'1', 'img': require('../../assets/images/lukol-tablets60_1024x1024.png') },
                { 'id': '04', 'name': 'Stain Removal Toothpaste', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '500.00', 'rating':'5', 'img': require('../../assets/images/stain-removal-toothpaste_1024x1024.png') },
                { 'id': '05', 'name': 'Aactaril soap', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '650.00', 'rating':'3', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '06', 'name': 'Hairzone Solution', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '400.00', 'rating':'2', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '07', 'name': 'Products7', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '50.00', 'rating':'3', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '08', 'name': 'Products8', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '490.00', 'rating':'3', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '09', 'name': 'Products9', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '290.00', 'rating':'4', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '10', 'name': 'Products10', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '399.00', 'rating':'4', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '11', 'name': 'Products11', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '499.00', 'rating':'5', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '12', 'name': 'Products12', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '199.00', 'rating':'3', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '13', 'name': 'Products13', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '699.00', 'rating':'4', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '14', 'name': 'Products14', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '799.00', 'rating':'5', 'img': require('../../assets/images/greentea.jpg') },
                { 'id': '15', 'name': 'Products15', 'desc': 'We are a prominent manufacturer and exporter of effectual array of Ayurvedic Herbal Products, Herbal Skin & Hair Care Products. Our range of herbal products extensively used for treating various skin and body related ailments.', 'Ingredients': ['Daruhaldi (Berberis aristata)', 'Gehun seed', 'Dhania (coriandrum sativum)', 'Pudina (Mentha arvensis)'], 'price': '310.00', 'rating':'4', 'img': require('../../assets/images/greentea.jpg') }
            ],
            cartItems: [],
            cartItemCount:0
        }

    }

    cardClick = (item) => {
        this.setState({
            currentItem:item
        });

        window.location.hash = 'productDetails';
    }

    goToCart = () => {
        window.location.hash = 'cart';
    }

    getTotalPrice = () => {
        return this.state.cartItems.length > 0 ? this.state.cartItems.reduce((acc, item) => {
            return acc + (item.count * item.price);
        }, 0) : 0;
    }


    updateCartList = (_id, _actionKey, count) => {
        const {products, cartItems} = this.state;
        const itemsInCart = [...cartItems];
        let itemIndex = -1;
        const filteredItemFromCart = itemsInCart.length > 0 && itemsInCart.filter((val, i) => {
            itemIndex = val.id === _id ? i : itemIndex;
            return val.id === _id;
        });
        const hasItemInCart = filteredItemFromCart.length > 0;

        switch (_actionKey) {
            case 'add':
                    if (!hasItemInCart) {
                        const itemFromProductList = products.filter(val => val.id === _id)[0];
                        itemFromProductList['count'] = count ? count : 1;
                        itemsInCart.push(itemFromProductList);
                    }
                    else {
                        if (itemIndex !== -1) {
                            itemsInCart[itemIndex].count = count ? count : 1;
                        }
                    }
                break;
            case 'update':
                if (hasItemInCart && itemIndex !== -1) {
                    itemsInCart[itemIndex].count = count ? count : 1;
                }
                break;
            case 'delete':
                if (hasItemInCart && itemIndex !== -1) {
                    itemsInCart.splice(itemIndex, 1);
                }
                break;
            default:
                break;
        };

        this.setState({
            cartItems: itemsInCart,
            cartItemCount: itemsInCart.reduce((acc, item) => {
                return acc + item.count;
            }, 0)
        });
    }

    updateHashUrl = (currentPage) => {
        window.location.hash = currentPage;
    }

    componentDidMount() {
        this.updateHashUrl(this.state.currentPage);
        window.addEventListener('hashchange', this.locationHashChanged, false);
    }

    locationHashChanged = () => {
        this.setState({
            currentPage: window.location.hash
        }, () => {
            this.updateHashUrl(this.state.currentPage);
        });
    }

    renderScreenByHash = () => {
        const {currentPage, currentItem, cartItems} = this.state;

        switch (currentPage) {
            case '#home':
                return <HomeComponent  handleCardClick = {this.cardClick} productList={this.state.products}  />;
            case '#productDetails':
                return <ProductDetails itemInfo={currentItem} updateProduct={this.updateCartList} goToCartClick={this.goToCart} />;
            case '#cart':
                return <CartList products={cartItems} updateProduct={this.updateCartList} getTotalPriceCall={this.getTotalPrice}/>
            default:
                return <HomeComponent  handleCardClick = {this.cardClick} productList={this.state.products} />;
        }
    }


    render() {
        const {cartItemCount} = this.state;
        return (
            <div className='main-container'>
                <HeaderComponent  cartItemCount={cartItemCount} goToCartClick={this.goToCart}/>
                <section className='bodyContent ec-bodyContent'>
                    { this.renderScreenByHash() }
                </section>
                <FooterComponent />
            </div>
        );
    }
}

Main.defaultProps = {

};

export default Main;