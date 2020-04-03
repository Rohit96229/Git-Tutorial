import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">cart</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        {/* <NavLink to="/about">About</NavLink> */}
        <h1>My shopping card...</h1>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
// import React from "react";
// import "./App.css";
// import Router from "./Router";
// import { NavLink } from "react-router-dom";
// import {
//   /*BrowserRouter as Router, */ Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/cart",
//     sidebar: () => <div>cart!</div>,
//     main: () => <h2>cart</h2>
//   }
// ];

// export default function SidebarExample() {
//   return (
//     <Router>
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             padding: "10px",
//             width: "40%",
//             background: "#f0f0f0"
//           }}
//         >
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/cart">cart</Link>
//             </li>
//           </ul>

//           <Switch>
//             {routes.map((route, index) => (
//               <Route
//                 key={index}
//                 path={route.path}
//                 exact={route.exact}
//                 children={<route.sidebar />}
//               />
//             ))}
//           </Switch>
//         </div>

//         <div style={{ flex: 1, padding: "10px" }}>
//           <Switch>
//             {routes.map((route, index) => (
//               <Route
//                 key={index}
//                 path={route.path}
//                 exact={route.exact}
//                 children={<route.main />}
//               />
//             ))}
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }
