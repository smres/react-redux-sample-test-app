import React, { Component } from "react";
import { getAll, remove } from "../stateManagement/actions/productActions";
import { connect } from "react/redux";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Product List</h1>
        {this.props.products.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.id}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.items,
  };
}

export default connect(mapStateToProps)(ProductList);
