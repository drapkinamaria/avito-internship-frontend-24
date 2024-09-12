import {Order} from "../../types/types";

export type OrdersState = {
    orders: Order[];
    selectedOrder: Order | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
