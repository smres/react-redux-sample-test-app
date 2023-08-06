import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from "../stateManagement/actions/productActions";

const Test1 = () => {
    const itemsState = useSelector((state) => (state.productStateInitial));

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(itemsState)
    }, [itemsState])
    return (
        <div>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {itemsState.items.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm' onClick={() => dispatch(remove(item.id))}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Test1;