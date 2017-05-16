import { createStore, applyMiddleware } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import rootReducer from '../reducers/index';

import { loginUser,submit,addCart,register,itemsFetchData,stockFetchData,orderPostData, deleteOrders, updateOrder,orderPlaceDataSuccess, change, searchItems, updateSearch, notify,success,openModal,openDialogue, warning, info } from '../actions/items';

import {usersFetchData,UsersLoginId, RemoveUser} from '../actions/user';
import App  from '../containers/App';
import '../styles/css/style.css';
import styles from '../styles'
import  '../styles.scss';
import  '../styles/common.css';
// export function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,    
//         applyMiddleware(thunk)
//     );
// }


// export function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }
// >>>>>>> Stashed changes

const mapStateToProps = (state) => {
    
    return {
        open:state.openModal,
        cartItems : state.cartItems,
        openD:state.openDialogue,
        users: state.users,
        user: state.user,
        loadHeader : state.loadHeader || false,
        loginId: state.loginId,
        orders:state.orders,
        items: state.items,
        stocks:state.stocks,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        searchResults: state.searchResults,
        notifications: state.notifications,
        notificationMsg: state.notificationMsg
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal:(bool)=>dispatch(openModal(bool)),
        addToCart: (item, cartItems)=>dispatch(addCart(item, cartItems)),
        openDialogue:(bool)=>dispatch(openDialogue(bool)),
        fetchData: (url) => dispatch(itemsFetchData(url)),
        submitOrders : (user, cartItems)=> dispatch(submit(user,cartItems)),
        fetchStocks:(url) => dispatch(stockFetchData(url)),
        makeOrders:(url,data) => dispatch(orderPostData(url,data)),
        storeOrders : (data) => dispatch(orderPlaceDataSuccess(data)),
        fetchTraders: (url) => dispatch(usersFetchData(url)),
        getUser: (user) => dispatch(UsersLoginId(user)),
        logoutUser: () => dispatch(RemoveUser()),
        updateSearch: (newOrder, searchResults) => dispatch(updateSearch(newOrder, searchResults)),        
        searchOrders: (key, criteria, items) => dispatch(searchItems(key, criteria, items)),
        notify: (notificationMsg, notifications) => dispatch(notify(notificationMsg, notifications)),
        success: (opts) => dispatch(success(opts)),
        info: (opts) => dispatch(info(opts)),
        login:(obj) => dispatch(loginUser(obj)),
        warning: (opts) => dispatch(warning(opts)),                                                      
        deleteOrder: (url) => dispatch(deleteOrders(url)), 
        change: (type) => dispatch(change(type)), 
        registerUser : ( email, pwd, name, no) => dispatch(register( email,pwd, name, no)),
        updateOrder: (msg, orders, newOrder) => {
            
            return dispatch(updateOrder(msg, orders, newOrder))}                                         
    };
};

export var MainApp = connect(mapStateToProps, mapDispatchToProps)(App);



 