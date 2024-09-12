import { Card } from 'react-bootstrap';
import {FC} from "react";
import {Advertisment} from "../types/types";

interface AdvertisementCardProps {
    advertisement: Advertisment;
}

const AdvertisementCard: FC<AdvertisementCardProps> = ({ advertisement }) => {
    return (
        <Card>
            <Card.Img variant="top" src={advertisement.imageUrl || 'default-image.jpg'} alt={advertisement.name} />
            <Card.Body>
                <Card.Title>{advertisement.name}</Card.Title>
                <Card.Text>
                    Цена: {advertisement.price} руб.<br />
                    Просмотры: {advertisement.views}<br />
                    Лайки: {advertisement.likes}<br />
                    {advertisement.description && <p>{advertisement.description}</p>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default AdvertisementCard;
