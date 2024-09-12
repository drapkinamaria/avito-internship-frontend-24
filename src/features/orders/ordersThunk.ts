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

import { fetchOrders as fetchOrdersApi, fetchOrder as fetchOrderApi, updateOrder as updateOrderApi, deleteOrder as deleteOrderApi, patchOrder as patchOrderApi } from '../../api/orders';

import { AppDispatch } from "../../store/store";
import { Order } from "../../types/types";

// Получение всех заказов
export const fetchOrders = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchOrdersStart());
        const response = await fetchOrdersApi();
        dispatch(fetchOrdersSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchOrdersFail(error.message));
    }
};

// Получение одного заказа по id
export const fetchOrder = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchOrderStart());
        const response = await fetchOrderApi(id);
        dispatch(fetchOrderSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchOrderFail(error.message));
    }
};

// Полное обновление заказа (PUT)
export const updateOrder = (id: string, order: Order) => async (dispatch: AppDispatch) => {
    try {
        dispatch(updateOrderStart());
        const response = await updateOrderApi(id, order);
        dispatch(updateOrderSuccess(response.data));
    } catch (error: any) {
        dispatch(updateOrderFail(error.message));
    }
};

// Частичное обновление заказа (PATCH)
export const patchOrder = (id: string, order: Partial<Order>) => async (dispatch: AppDispatch) => {
    try {
        dispatch(updateOrderStart());
        const response = await patchOrderApi(id, order);
        dispatch(updateOrderSuccess(response.data));
    } catch (error: any) {
        dispatch(updateOrderFail(error.message));
    }
};

// Удаление заказа
export const deleteOrder = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteOrderStart());
        await deleteOrderApi(id);
        dispatch(deleteOrderSuccess(id));
    } catch (error: any) {
        dispatch(deleteOrderFail(error.message));
    }
};
