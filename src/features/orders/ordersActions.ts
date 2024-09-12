import { createAction } from '@reduxjs/toolkit';
import { Order } from '../../types/types';

export const fetchOrdersStart = createAction('orders/fetchStart');
export const fetchOrdersSuccess = createAction<Order[]>('orders/fetchSuccess');
export const fetchOrdersFail = createAction<string>('orders/fetchFail');

export const fetchOrderStart = createAction('orders/fetchOneStart');
export const fetchOrderSuccess = createAction<Order>('orders/fetchOneSuccess');
export const fetchOrderFail = createAction<string>('orders/fetchOneFail');

export const updateOrderStart = createAction('orders/updateStart');
export const updateOrderSuccess = createAction<Order>('orders/updateSuccess');
export const updateOrderFail = createAction<string>('orders/updateFail');

export const deleteOrderStart = createAction('orders/deleteStart');
export const deleteOrderSuccess = createAction<string>('orders/deleteSuccess');
export const deleteOrderFail = createAction<string>('orders/deleteFail');
