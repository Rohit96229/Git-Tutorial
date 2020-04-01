import React from "react";

export default function ProductListItem(props) {
  debugger;
  // const thisItemInCart = props.cart.filter(
  //   item => item.id === props.product.id
  // )[0];
  return (
    <div>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        {/* <button onClick={() => props.addToCart(props.product)}>
          Add To Chart({(thisItemInCart && thisItemInCart.quantity) || 0})
        </button> */}
        <button onClick={() => props.addToCart(props.product)}>
          Add To Chart({(props.cartItem && props.cartItem.quantity) || 0})
        </button>
        {props.cartItem ? (
          <button onClick={() => props.removeFromCart(props.cartItem)}>
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
}

//{(thisItemInCart && thisItemInCart.quantity) || 0}
//removeFromCart={props.removeFromCart}
