// import React from "react";
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

// const CreateProduct = (props) => {
//   return (
//     <div style={{ margin: "10rem 5rem" }}>
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>Title</InputGroupText>
//         </InputGroupAddon>
//         <Input placeholder="Your product here" />
//       </InputGroup>
//       <br />
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>Image URL</InputGroupText>
//         </InputGroupAddon>
//         <Input placeholder="Your product here" />
//       </InputGroup>

//       <br />
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>Description</InputGroupText>
//         </InputGroupAddon>
//         <Input placeholder="Your product here" />
//       </InputGroup>
//       <br />

//       <InputGroup>
//         <InputGroupAddon addonType="prepend">$</InputGroupAddon>
//         <Input
//           placeholder="Starting Bid"
//           min={0}
//           max={100}
//           type="number"
//           step="1"
//         />
//         <InputGroupAddon addonType="append">.00</InputGroupAddon>
//       </InputGroup>
//       <br />
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">$</InputGroupAddon>
//         <Input
//           placeholder="Current Bid"
//           min={0}
//           max={100}
//           type="number"
//           step="1"
//         />
//         <InputGroupAddon addonType="append">.00</InputGroupAddon>
//       </InputGroup>
//     </div>
//   );
// };

// export default CreateProduct;
import React, { Component } from "react";
import api from "../../api";

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

class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // name: '',
      // rating: '',
      // time: '',
      title: "",
      cardImg: "http://source.unsplash.com/random/?",
      description: "",
      startingBid: "",
      currentBid: "",
    };
  }

  handleChangeInputTitle = async (event) => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleChangeInputDescription = async (event) => {
    const description = event.target.value;
    this.setState({ description });
  };
  handleChangeInputCardImg = async (event) => {
    const cardImg = event.target.value;
    this.setState({ cardImg });
  };
  handleChangeInputStartingBid = async (event) => {
    const startingBid = event.target.value;
    this.setState({ startingBid });
  };
  handleChangeInputCurrentBid = async (event) => {
    const currentBid = event.target.value;
    this.setState({ currentBid });
  };

  handleIncludeProduct = async () => {
    const { title, description, cardImg, startingBid, currentBid } = this.state;
    // const arrayTime = time.split("/");
    const payload = { title, description, cardImg, startingBid, currentBid };

    await api.createProduct(payload).then((res) => {
      window.alert(`Product inserted successfully`);
      this.setState({
        title: "",
        cardImg: "",
        description: "",
        startingBid: "",
        currentBid: "",
      });
    });
  };

  render() {
    const { title, description, cardImg, startingBid, currentBid } = this.state;
    return (
      <Wrapper>
        <Title style={{ marginTop: "2rem" }}>Place an Ad</Title>

        <Label>Title: </Label>
        <InputText
          type="text"
          value={title}
          onChange={this.handleChangeInputTitle}
        />
        <Label>Description: </Label>
        <InputText
          type="text"
          value={description}
          onChange={this.handleChangeInputDescription}
        />
        <Label>Image URL: </Label>
        <InputText
          type="text"
          value={cardImg}
          onChange={this.handleChangeInputCardImg}
        />

        <Label>startingBid: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          value={startingBid}
          onChange={this.handleChangeInputStartingBid}
        />
        <Label>currentBid: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          value={currentBid}
          onChange={this.handleChangeInputCurrentBid}
        />

        <Button onClick={this.handleIncludeProduct}>Add Product</Button>
        <CancelButton href={"/"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default CreateProduct;
