import { connect } from "react-redux";
import { productGetAll, productGetById, productAdd, productRemove } from "../actions/actionTypes"

const initialState = {
    items: [
        { id: 1, productName: "Product A", price: 100 },
        { id: 2, productName: "Product B", price: 200 },
        { id: 3, productName: "Product C", price: 300 },
    ],
    isLoading: true
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case productGetAll:
            return { ...state, items: state.items };

        case productGetById:
            return { ...state, items: state.items.find(q => q.id === action.payload) };

        case productAdd:
            return { ...state, items: state.items.concat([action.payload]) };

        case productRemove:
            return { ...state, items: state.items.filter(q => q.id !== action.payload) };

        default:
            return state;
    }
}

const mapStateToProps = state => ({
    products: state.productState.items
})

export default connect(mapStateToProps)(productReducer);