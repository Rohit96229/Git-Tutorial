import React from "react";
import ProductListing from "../features/product-listing/";

import data from "../data/products.json";

export default function Homepage(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductListing products={data.products} />
    </div>
  );
}

// import React, { Component } from "react";

// class HomePage extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <h1>Home page component here...</h1>
//       </div>
//     );
//   }
// }

// export default HomePage;
