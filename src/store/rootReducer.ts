import { combineReducers } from '@reduxjs/toolkit';
import { advertisementsReducer } from "../features/advertisements/advertisementsReducer";
import { ordersReducer } from "../features/orders/ordersReducer";

const rootReducer = combineReducers({
    advertisements: advertisementsReducer,
    orders: ordersReducer,
});

export default rootReducer;
