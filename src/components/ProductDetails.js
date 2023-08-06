import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from "../stateManagement/actions/productActions";

const ProductDetails = () => {
    const itemsState = useSelector((state) => (state.productStateInitial));
    const dispatch = useDispatch();

    console.log("sss = ", itemsState);

    const save = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const id = form.get("productId");
        const productName = form.get("productName");
        const price = form.get("price");

        dispatch(add({ id, productName, price }))
        alert("Add item Succ");

        // clear form after Submit
        event.target.reset();
    }
    return (
        <>
            <h1>Add New Product</h1>
            <form onSubmit={(event) => save(event)}>
                <div class="form-group">
                    <label>Product ID:</label>
                    <input type="number" class="form-control" name='productId' />
                </div>
                <div class="form-group">
                    <label>Product Name:</label>
                    <input type="text" class="form-control" name='productName' />
                </div>
                <div class="form-group">
                    <label>Price:</label>
                    <input type="number" class="form-control" name='price' />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        </>
    );
};

export default ProductDetails;