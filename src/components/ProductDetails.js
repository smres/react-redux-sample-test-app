import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../stateManagement/actions/productActions";

const ProductDetails = () => {
  const itemsState = useSelector((state) => state.productStateInitial);
  const dispatch = useDispatch();

  console.log("sss = ", itemsState);

  const save = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get("productId");
    const productName = form.get("productName");
    const price = form.get("price");

    dispatch(add({ id, productName, price }));
    alert("Add item Success...");

    // clear form after Submit
    event.target.reset();
  };
  return (
    <>
      <h1>Add New Product</h1>
      <form onSubmit={save}>
        <div className="form-group">
          <label htmlFor="productId">Product ID:</label>
          <input
            id="productId"
            type="number"
            className="form-control"
            name="productId"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            id="productName"
            type="text"
            className="form-control"
            name="productName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            className="form-control"
            name="price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
};

export default ProductDetails;
