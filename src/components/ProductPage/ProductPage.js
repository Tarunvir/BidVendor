import React from "react";
import "./ProductPage.css";
import data from "../../data";

export default function ProductPage(props) {
  console.log(props.match.params.id);
  return (
    <div>
      <div className="outer-flex">
        <img
          style={{ objectFit: "cover", height: "400px" }}
          src={"http://source.unsplash.com/random/?city,water,food"}
        />
        <div className="inner-flex">
          <span>Product Name</span>
          <span>Description</span>
          <span>Starting Bid</span>
          <span>Other Details</span>
        </div>
        <div className="inner-flex">
          <span>Current Highest bid</span>
          <span>
            <form className="bidbox-flex">
              <span>Your Bid:</span>
              <label>
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Bid Now!" />
            </form>
          </span>
        </div>
      </div>
    </div>
  );
}
