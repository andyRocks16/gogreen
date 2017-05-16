import axios from 'axios';

export var responseOrder = [];

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function openModal(bool) {
    console.log('insider reducer openModal')

    return {
        type: 'OPEN_MODAL',
        open: bool
    };
}
export function openDialogue(bool) {
    console.log('insider reducer dialogue')

    return {
        type: 'OPEN_DIALOGUE',
        openD: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type:  'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function orderPlaceDataSuccess(order) {
    return {
        type: 'ORDER_PLACE_DATA_SUCCESS',
        orders
    };
}

export function deleteOrderSuccess() {
    return {
        type: 'DELETE_ORDER_SUCCESS',
    };
}

export function updateSearch(newOrder, searchResults) {
    return {
        type: 'UPDATE_SEARCH_DATA',
        newOrder,
        searchResults
    };
}

export function notify(notificationMsg, notifications) {
    return {
        type: 'NOTIFY_USER',
        notificationMsg,
        notifications
    };
}

export function addCart(item, cartItems) {
    return {
        type: 'ADD_TO_CART',
        item,
        cartItems
    };
}

export function updateOrder(msg, orders, newOrder, searchResults) {
    return {
        type: msg,
        orders,
        newOrder
    };
}

export function loginSuccessfull(obj) {
    return {
        type: "LOGIN_USER",
        obj
    };
}

export function register( email, pwd, name, phone_no) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log("in");
        return axios({
            url: "http://localhost:8080/register",
            timeout: 20000,
            method: 'post',
            data: { user_name : email, user_pwd : pwd , name, phone_no},
            responseType: 'json'
        })
            .then((response) => { return response.data; })
            .then((stocks) => {
                console.log(stocks)})
            .catch((err) => {
                dispatch(itemsHasErrored(true))
                console.log(err.message)
            });
    };
}



export function loginUser(obj) {
    console.log(obj,"skd==================")
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log("in");
        return axios({
            url: "http://localhost:8080/login",
            timeout: 50000,
            method: 'post',
            data: obj,
            responseType: 'json'
        })
            .then((response) => { console.log(response,"asdsdsds+++++++++++++++++++++++++++++++++++");return response.data; })
            .then((stocks) => {
                
                dispatch(loginSuccessfull(stocks))})
            .catch((err) => {
                dispatch(itemsHasErrored(true))
                console.log(err.message)
            });
    };
}

export function submit(user,cartItems) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        var data = {
            user_id : user.id,
            content : cartItems
        }
        return axios({
            url: "http://localhost:8080/giveOrder",
            timeout: 20000,
            method: 'post',
            data,
            responseType: 'json'
        })
            .then((response) => { return response.data; })
            .then((stocks) => {
                console.log(stocks)})
            .catch((err) => {
                dispatch(itemsHasErrored(true))
                console.log(err.message)
            });
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log(url,"///////////////++++++++++++++++++++++");
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => {
                console.log(response)
                return response.data})
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(itemsFetchDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function orderPostData(url, data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));


        return axios({
            url: url,
            timeout: 20000,
            data,
            method: 'post',
            responseType: 'json'
        })
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .then((orders) => { console.log(responseOrder); responseOrder.push(orders); dispatch(orderPlaceDataSuccess(responseOrder)) })
            .catch((err) => { console.log(err.message); dispatch(itemsHasErrored(true)) });
    };
}


export function deleteOrders(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));


        return axios({
            url: url,
            timeout: 20000,
            method: 'delete',
            responseType: 'json'
        })
            .then((response) => {
                console.log(response);
                dispatch(updateSearch([]))
                return response.data;
            })
            .catch((err) => { console.log(err.message); dispatch(itemsHasErrored(true)) });
    };
}

export function searchItems(key, criteria, items) {
    let type = "SEARCH_DATA_" + criteria;
    return {
        type,
        items,
        key
    }
}

export function show(opts = {}, level = 'success') {
    return {
        type: "RNS_SHOW_NOTIFICATION",
        ...opts,
        uid: opts.uid || Date.now(),
        level
    };
}

export function success(opts) {
    return show(opts, 'success');
}

export function error(opts) {
    return show(opts, 'error');
}

export function warning(opts) {
    return show(opts, 'warning');
}

export function info(opts) {
    return show(opts, 'info');
}

export function hide(uid) {
    return {
        type: RNS_HIDE_NOTIFICATION,
        uid
    };
}

export function change(type) {
    return {
        type
    };
}

