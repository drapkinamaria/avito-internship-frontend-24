import {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchOrders } from '../features/orders/ordersThunk';
import OrderCard from '../components/OrderCard';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Order } from '../types/types';

const Orders: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const orders: Order[] = useSelector((state: RootState) => state.orders.orders);
    const [statusFilter, setStatusFilter] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('asc');

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const handleStatusFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(event.target.value);
    };

    const handleSortOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value);
    };

    const filteredOrders = orders.filter(order =>
        statusFilter === '' ? true : order.status.toString() === statusFilter
    );

    const sortedOrders = filteredOrders.sort((a, b) => {
        return sortOrder === 'asc' ? a.total - b.total : b.total - a.total;
    });

    return (
        <Container>
            <h1>Список заказов</h1>
            <Form className="mb-4">
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="statusFilter">
                            <Form.Label>Фильтр по статусу</Form.Label>
                            <Form.Control as="select" value={statusFilter} onChange={handleStatusFilter}>
                                <option value="">Все</option>
                                <option value="0">Создан</option>
                                <option value="1">Оплачен</option>
                                <option value="2">В доставке</option>
                                <option value="3">Доставлен в пункт</option>
                                <option value="4">Получен</option>
                                <option value="5">Архив</option>
                                <option value="6">Возврат</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="sortOrder">
                            <Form.Label>Сортировка по сумме</Form.Label>
                            <Form.Control as="select" value={sortOrder} onChange={handleSortOrder}>
                                <option value="asc">По возрастанию</option>
                                <option value="desc">По убыванию</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row>
                {sortedOrders.map((order: Order) => (
                    <Col key={order.id} md={6}>
                        <OrderCard order={order} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Orders;
