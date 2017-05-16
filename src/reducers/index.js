import { combineReducers } from 'redux';
import { user,items, itemsHasErrored, itemsIsLoading,stocks,orders, searchResults,cartItems, notifications, notificationMsg, loadHeader ,openModal,openDialogue} from './items';
import { users, usersHasErrored, usersIsLoading,loginId } from './user';

export default combineReducers({
    items,
    stocks,
    orders,
    itemsHasErrored,
    itemsIsLoading,
    users,
    usersHasErrored,
    usersIsLoading,
    loginId,
    searchResults,
    notifications,
    notificationMsg,
    loadHeader,
    openModal,
    openDialogue,
    cartItems,
    user
});
