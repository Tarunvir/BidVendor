// import React, { useEffect, useState } from "react";
// import ProductCard from "./Card";
// import { Jumbotron, Container } from "reactstrap";
// import { NavLink } from "react-router-dom";
// import api from "../api";

// import axios from "axios";

// export default function Home(props) {
//   const [products, setproducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await api.getProducts;
//       setproducts(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="jumbo">
//         <Jumbotron style={{ margin: "0" }} fluid>
//           <Container fluid>
//             <h1 className="display-3">BidVendor.</h1>
//             <p className="lead">A place to Bid, Buy, and Sell! </p>
//           </Container>
//         </Jumbotron>
//       </div>
//       <div>
//         <h6 className="heading flex">
//           Newly available {"  "}
//           <span style={{ marginLeft: "1rem" }}>
//             <svg
//               style={{ width: "24px", height: "24px" }}
//               class="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
//               ></path>
//             </svg>
//           </span>
//         </h6>
//       </div>
//       <div className="cards flex">
//         {products.map((product) => {
//           console.log(product);
//           return (
//             <div key={product._id}>
//               <NavLink to={"/productpage/" + product._id}>
//                 <ProductCard product={product} />
//               </NavLink>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
