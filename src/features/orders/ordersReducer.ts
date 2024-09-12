import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/types';
import {
    fetchOrdersStart,
    fetchOrdersSuccess,
    fetchOrdersFail,
    fetchOrderStart,
    fetchOrderSuccess,
    fetchOrderFail,
    updateOrderStart,
    updateOrderSuccess,
    updateOrderFail,
    deleteOrderStart,
    deleteOrderSuccess,
    deleteOrderFail,
} from './ordersActions';
import { OrdersState } from './types';
import { Draft } from 'immer';

const initialState: OrdersState = {
    orders: [],
    selectedOrder: null,
    status: 'idle',
    error: null,
};

export const ordersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchOrdersStart, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchOrdersSuccess, (state, action: PayloadAction<Order[]>) => {
            state.status = 'succeeded';
            state.orders = action.payload as Draft<Order[]>;
        })
        .addCase(fetchOrdersFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        });

    builder
        .addCase(fetchOrderStart, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchOrderSuccess, (state, action: PayloadAction<Order>) => {
            state.status = 'succeeded';
            state.selectedOrder = action.payload as Draft<Order>;
        })
        .addCase(fetchOrderFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        });

    builder
        .addCase(updateOrderStart, (state) => {
            state.status = 'loading';
        })
        .addCase(updateOrderSuccess, (state, action: PayloadAction<Order>) => {
            state.status = 'succeeded';
            state.orders = state.orders.map((order) =>
                order.id === action.payload.id ? (action.payload as Draft<Order>) : order
            ) as Draft<Order[]>;
        })
        .addCase(updateOrderFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        });

    // Удаление заказа
    builder
        .addCase(deleteOrderStart, (state) => {
            state.status = 'loading';
        })
        .addCase(deleteOrderSuccess, (state, action: PayloadAction<string>) => {
            state.status = 'succeeded';
            state.orders = state.orders.filter((order) => order.id !== action.payload) as Draft<Order[]>;
        })
        .addCase(deleteOrderFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        });
});
