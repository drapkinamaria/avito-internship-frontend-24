import { FC } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <BootstrapPagination>
            <BootstrapPagination.Prev
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Назад
            </BootstrapPagination.Prev>

            {pages.map((page) => (
                <BootstrapPagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </BootstrapPagination.Item>
            ))}

            <BootstrapPagination.Next
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Вперед
            </BootstrapPagination.Next>
        </BootstrapPagination>
    );
};

export default Pagination;
