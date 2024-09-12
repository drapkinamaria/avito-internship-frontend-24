import { Form } from 'react-bootstrap';
import {FC} from "react";

interface ItemsPerPageSelectorProps {
    itemsPerPage: number;
    setItemsPerPage: (items: number) => void;
}

const ItemsPerPageSelector: FC<ItemsPerPageSelectorProps> = ({ itemsPerPage, setItemsPerPage }) => {
    return (
        <Form.Group controlId="itemsPerPageSelector">
            <Form.Label>Количество элементов на странице</Form.Label>
            <Form.Control
                as="select"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </Form.Control>
        </Form.Group>
    );
};

export default ItemsPerPageSelector;
