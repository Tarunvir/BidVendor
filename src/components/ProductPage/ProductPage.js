// import React, { useEffect, useState } from "react";
// import "./ProductPage.css";
// import data from "../../data";

// export default function ProductPage(props) {
//   console.log(props.match.params.id);
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState(null);
//   useEffect(() => {
//     data.products.map((p) => {
//       if (p.id === props.match.params.id) {
//         setProduct(p);
//         setLoading(false);
//       }
//     });
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         "Loading"
//       ) : (
//         <div className="outer-flex">
//           <img
//             style={{ objectFit: "cover", height: "400px", maxWidth: "400px" }}
//             src={product?.cardImg}
//           />
//           <div className="inner-flex">
//             <span>{product?.cardTitle}</span>
//             <span>{product?.cardText}</span>
//             <span>Starting Bid</span>
//             <span>Other Details</span>
//           </div>
//           <div className="inner-flex">
//             <span>Current Highest bid</span>
//             <span>
//               <form className="bidbox-flex">
//                 <span>Your Bid:</span>
//                 <label>
//                   <input type="text" name="name" />
//                 </label>
//                 <input type="submit" value="Bid Now!" />
//               </form>
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { Component } from "react";
// import api from "../../api";

// class ProductPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       columns: [],
//       isLoading: false,
//     };
//   }

//   componentDidMount = async () => {
//     this.setState({ isLoading: true });

//     await api.getProductbyId(this.props.match.params.id).then((products) => {
//       this.setState({
//         products: products.data.data,
//         isLoading: false,
//       });
//     });
//   };

//   render() {
//     const { products, isLoading } = this.state;
//     console.log("TCL: MoviesList -> render -> movies", products);

//     const columns = [
//       {
//         Header: "ID",
//         accessor: "_id",
//         filterable: true,
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//         filterable: true,
//       },
//       {
//         Header: "Rating",
//         accessor: "rating",
//         filterable: true,
//       },
//       {
//         Header: "Time",
//         accessor: "time",
//         Cell: (props) => <span>{props.value.join(" / ")}</span>,
//       },
//     ];

//     let showTable = true;
//     if (!products.length) {
//       showTable = false;
//     }

//     return (
//       <div>
//         <div className="outer-flex">
//           <img
//             style={{ objectFit: "cover", height: "400px", maxWidth: "400px" }}
//             src={products.cardImg}
//           />
//           <div className="inner-flex">
//             <span>{products.title}</span>
//             <span>{products.description}</span>
//             <span>Starting Bid</span>
//             <span>Other Details</span>
//           </div>
//           <div className="inner-flex">
//             <span>Current Highest bid</span>
//             <span>
//               <form className="bidbox-flex">
//                 <span>Your Bid:</span>
//                 <label>
//                   <input type="text" name="name" />
//                 </label>
//                 <input type="submit" value="Bid Now!" />
//               </form>
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductPage;
import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import api from "../../api";
import "./ProductPage.css";
import styled from "styled-components";
const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      currentBid: "",
      products: [],
      columns: [],
      isLoading: false,
    };
  }
  handleChangeInputCurrentBid = async (event) => {
    const currentBid = event.target.value;
    this.setState({ currentBid });
  };
  handleUpdateProduct = async () => {
    const { id, currentBid } = this.state;
    const payload = { currentBid };
    await api.updateProductById(id, payload).then((res) => {
      window.alert(`Bid updated successfully`);
      this.setState({
        currentBid: 0,
      });
    });
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getProducts().then((products) => {
      this.setState({
        products: products.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { products, currentBid, isLoading } = this.state;
    console.log("TCL: MoviesList -> render -> movies", products);

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        Header: "Time",
        accessor: "time",
        Cell: (props) => <span>{props.value.join(" / ")}</span>,
      },
    ];

    let showTable = true;
    if (!products.length) {
      showTable = false;
    }

    return (
      <div>
        <div className="cards flex">
          {products.map((product) => {
            console.log(product);
            if (product._id === this.props.match.params.id) {
              return (
                <div key={product._id}>
                  <div className="outer-flex">
                    <img
                      style={{
                        objectFit: "cover",
                        height: "350px",
                        maxWidth: "350px",
                      }}
                      src={product.cardImg}
                    />
                    <div className="inner-flex">
                      <span>
                        Item:{" "}
                        <span style={{ color: "darkblue" }}>
                          {product.title}
                        </span>
                      </span>
                      <span>
                        Description:{" "}
                        <span style={{ color: "darkblue" }}>
                          {product.description}
                        </span>
                      </span>
                      <span>
                        Starting Bid:{" "}
                        <span style={{ color: "darkred" }}>
                          {product.startingBid}$
                        </span>
                      </span>
                      <span>Other Details</span>
                    </div>
                    <div className="inner-flex">
                      <span>
                        Current Highest bid:{" "}
                        <span style={{ color: "darkred" }}>
                          {product.currentBid}$
                        </span>
                      </span>
                      <span>
                        <form className="bidbox-flex">
                          {/* <span>Your Bid:</span> */}
                          <Label>Your Bid: </Label>
                          <InputText
                            type="number"
                            step="0.1"
                            lang="en-US"
                            value={currentBid}
                            onChange={this.handleChangeInputCurrentBid}
                          />
                          <Button onClick={this.handleUpdateProduct}>
                            Bid Now!
                          </Button>
                        </form>
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ProductPage;
