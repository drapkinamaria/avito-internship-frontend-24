import axios from 'axios';
import { Advertisment } from '../types/types';

export const BASE_URL_ADVERTISEMENTS = 'http://localhost:8000/advertisements';

/**
 * Получение всех объявлений
 */
export const fetchAdvertisements = () => axios.get<Advertisment[]>(BASE_URL_ADVERTISEMENTS);

/**
 *
 * Получение одного объявления по id
 */
export const fetchAdvertisement = (id: string) => axios.get<Advertisment>(`${BASE_URL_ADVERTISEMENTS}/${id}`);

/**
 * Создание нового объявления
 */
export const createAdvertisement = (advertisement: Omit<Advertisment, 'id'>) =>
    axios.post<Advertisment>(BASE_URL_ADVERTISEMENTS, advertisement);

/**
 * Полное изменение объявления
 */
export const updateAdvertisement = (advertisement: Advertisment, id: string) =>
    axios.put<Advertisment>(`${BASE_URL_ADVERTISEMENTS}/${id}`, advertisement);

/**
 * Частичное изменение объявления
 */
export const patchAdvertisement = (advertisement: Partial<Advertisment>, id: string) =>
    axios.patch<Advertisment>(`${BASE_URL_ADVERTISEMENTS}/${id}`, advertisement);

/**
 * Удаление объявления
 */
export const deleteAdvertisement = (id: string) =>
    axios.delete(`${BASE_URL_ADVERTISEMENTS}/${id}`);
