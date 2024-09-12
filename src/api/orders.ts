import axios from 'axios';
import { Order } from '../types/types';

const BASE_URL_ORDERS = 'http://localhost:8000/orders';

export const fetchOrders = () => axios.get<Order[]>(BASE_URL_ORDERS);

export const fetchOrder = (id: string) => axios.get<Order>(`${BASE_URL_ORDERS}/${id}`);

export const patchOrder = (id: string, order: Partial<Order>) =>
    axios.patch<Order>(`${BASE_URL_ORDERS}/${id}`, order);

export const updateOrder = (id: string, order: Order) =>
    axios.put<Order>(`${BASE_URL_ORDERS}/${id}`, order);

export const deleteOrder = (id: string) => axios.delete(`${BASE_URL_ORDERS}/${id}`);
