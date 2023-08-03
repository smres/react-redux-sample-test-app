// getAll
// getById
// Add
// Remove
// Edit

import { productGetAll, productGetById, productAdd, productRemove } from "./actionTypes"

export const getAll = () => ({
    type: productGetAll //??
})

export const getById = id => ({
    type: productGetById,
    payload: id
})

export const add = item => ({
    type: productAdd,
    payload: item
})

export const remove = id => ({
    type: productRemove,
    payload: id
})

// export const edit = item => ({
//     type: productEdit,
//     payload: item
// })