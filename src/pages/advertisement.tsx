import {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertisementCard from '../components/AdvertisementCard';
import Pagination from '../components/Pagination';
import {fetchAdvertisements} from "../features/advertisements/advertisementsThunk";

const Advertisement: FC = () => {
    const dispatch = useDispatch();
    const advertisements = useSelector(state => state.advertisements.advertisements);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchAdvertisements();
    }, [dispatch]);

    const filteredAds = advertisements.filter(ad => ad.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const paginatedAds = filteredAds.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <h1>Все объявления</h1>
            <input
                type="text"
                placeholder="Поиск по названию"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select onChange={(e) => setItemsPerPage(Number(e.target.value))} value={itemsPerPage}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
            <div>
                {paginatedAds.map((ad) => (
                    <AdvertisementCard key={ad.id} advertisement={ad} />
                ))}
            </div>
            <Pagination
                totalItems={filteredAds.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default Advertisement;
