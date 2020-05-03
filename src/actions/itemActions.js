
import axios from 'axios';

export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM_DETAILS = 'UPDATE_ITEM_DETAILS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const GET_SINGLE_ITEM = 'GET_SINGLE_ITEM';

export const createItem = postData => (dispatch, getState, http) =>
    axios.post('http://localhost:8083/pick_n_go_app_war_exploded/items', postData)
    .then((response) => dispatch({ type: CREATE_ITEM, payload: response.data.data }));

export const updateCategory = (fields, itemId) => (dispatch, getState) =>
    axios.put(`http://localhost:8083/pick_n_go_app_war_exploded/items?itemId=${itemId}`, fields)
    .then((response) => dispatch({ type: UPDATE_ITEM_DETAILS, payload: response.data.data }));

export const deleteItem = itemId => (dispatch, getState) =>
    axios.delete(`http://localhost:8083/pick_n_go_app_war_exploded/items?itemId=${itemId}`)
    .then((response ) => dispatch({ type: DELETE_ITEM, payload: response.data.message }));

export const getAllItems = () => (dispatch, getState) =>
    axios.get('http://localhost:8083/pick_n_go_app_war_exploded/items')
    .then(( response ) => {
        console.log("response ", response)
        dispatch({ type: GET_ALL_ITEMS, payload: response.data.data })
}

// axios.get('http://localhost:8083/pick_n_go_app_war_exploded/items')
//       .then(response => {
//         console.log("get all Items response -->>> ", response);
//         setAllItems(response.data.data);
//         setIsLoading(false);
//       });

);

export const getItem = itemId => (dispatch, getState) =>
    axios.put(`http://localhost:8083/pick_n_go_app_war_exploded/items?itemId=${itemId}`)
    .then((response) => dispatch({ type: GET_SINGLE_ITEM, payload: response.data.data }));












// export default {
//     CREATE_ITEM,
//     UPDATE_ITEM_DETAILS,
//     DELETE_ITEM,
//     GET_ALL_ITEMS,
//     GET_SINGLE_ITEM,
//     createItem,
//     updateCategory,
//     deleteItem,
//     getAllItems,
//     getItem
//     };