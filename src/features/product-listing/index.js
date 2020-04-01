import React from "react";
import ProductListItem from "./product-list-item";
import { connect } from "react-redux";
import { cartItemsWithQuantities } from "../cart";

/*export default*/ function ProductListing(props) {
  debugger;
  return (
    <div className="product-listing">
      {props.products.map(product => (
        <ProductListItem
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          // cart={cartItemsWithQuantities(props.cart)}
          cartItem={
            props.cart.filter(cartItem => cartItem.id === product.id)[0]
          }
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  console.log("state..............", state.cart);
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      debugger;
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
