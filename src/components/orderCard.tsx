import {FC, useState} from 'react';
import { Order } from '../types/types';
import { Button, Card, Collapse } from 'react-bootstrap';

interface OrderCardProps {
    order: Order;
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
    const [showProducts, setShowProducts] = useState<boolean>(false);

    const toggleShowProducts = () => setShowProducts(!showProducts);

    const getStatusText = (status: number): string => {
        switch (status) {
            case 0: return 'Создан';
            case 1: return 'Оплачен';
            case 2: return 'В доставке';
            case 3: return 'Доставлен в пункт';
            case 4: return 'Получен';
            case 5: return 'Архив';
            case 6: return 'Возврат';
            default: return 'Неизвестный статус';
        }
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Номер заказа: {order.id}</Card.Title>
                <Card.Text>Дата создания: {new Date(order.createdAt).toLocaleDateString()}</Card.Text>
                <Card.Text>Статус: {getStatusText(order.status)}</Card.Text>
                <Card.Text>Стоимость: {order.total} руб.</Card.Text>
                <Card.Text>Количество товаров: {order.items.length}</Card.Text>
                <Button variant="primary" onClick={toggleShowProducts}>
                    {showProducts ? 'Скрыть товары' : 'Показать все товары'}
                </Button>
                <Collapse in={showProducts}>
                    <div className="mt-3">
                        {order.items.map(item => (
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>Цена: {item.price} руб.</Card.Text>
                                <Card.Text>Количество: {item.count}</Card.Text>
                            </Card.Body>
                        ))}
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default OrderCard;
