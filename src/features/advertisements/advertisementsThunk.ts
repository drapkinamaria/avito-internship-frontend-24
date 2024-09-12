import { AppDispatch } from "../../store/store";
import {
    createAdvertisementFail,
    createAdvertisementStart,
    createAdvertisementSuccess, deleteAdvertisementFail, deleteAdvertisementStart, deleteAdvertisementSuccess,
    fetchAdvertisementFail,
    fetchAdvertisementsFail,
    fetchAdvertisementsStart,
    fetchAdvertisementsSuccess,
    fetchAdvertisementStart,
    fetchAdvertisementSuccess,
    updateAdvertisementFail,
    updateAdvertisementStart,
    updateAdvertisementSuccess
} from "./advertisementsActions";
import { fetchAdvertisements as fetchAdvertisementsApi,
    fetchAdvertisement as fetchAdvertisementApi,
    createAdvertisement as createAdvertisementApi,
    deleteAdvertisement as deleteAdvertisementApi,
    updateAdvertisement as updateAdvertisementApi,
    patchAdvertisement as patchAdvertisementApi
} from "../../api/advertisements";
import {Advertisment} from "../../types/types";

export const fetchAdvertisements = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchAdvertisementsStart());
        const response = await fetchAdvertisementsApi();
        dispatch(fetchAdvertisementsSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchAdvertisementsFail(error.message));
    }
};

export const fetchAdvertisement = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchAdvertisementStart()); // Начало запроса
        const response = await fetchAdvertisementApi(id); // Используем API для получения конкретного объявления
        dispatch(fetchAdvertisementSuccess(response.data)); // Успешное получение данных
    } catch (error: any) {
        dispatch(fetchAdvertisementFail(error.message)); // Ошибка при получении
    }
};

export const createAdvertisement = (advertisement: Omit<Advertisment, 'id'>) => async (dispatch: AppDispatch) => {
    try {
        dispatch(createAdvertisementStart()); // Начало запроса
        const response = await createAdvertisementApi(advertisement); // Используем API для создания нового объявления
        dispatch(createAdvertisementSuccess(response.data)); // Успешное создание объявления
    } catch (error: any) {
        dispatch(createAdvertisementFail(error.message)); // Ошибка при создании объявления
    }
};

export const updateAdvertisement = (advertisement: Advertisment, id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(updateAdvertisementStart()); // Начало запроса
        const response = await updateAdvertisementApi(advertisement, id); // Используем API для полного изменения
        dispatch(updateAdvertisementSuccess(response.data)); // Успешное изменение объявления
    } catch (error: any) {
        dispatch(updateAdvertisementFail(error.message)); // Ошибка при изменении объявления
    }
};

export const patchAdvertisement = (advertisement: Partial<Advertisment>, id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(patchAdvertisementStart()); // Начало запроса
        const response = await patchAdvertisementApi(advertisement, id); // Используем API для частичного изменения
        dispatch(patchAdvertisementSuccess(response.data)); // Успешное изменение объявления
    } catch (error: any) {
        dispatch(patchAdvertisementFail(error.message)); // Ошибка при изменении объявления
    }
};

export const deleteAdvertisement = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteAdvertisementStart()); // Начало запроса
        await deleteAdvertisementApi(id); // Используем API для удаления объявления
        dispatch(deleteAdvertisementSuccess(id)); // Успешное удаление объявления
    } catch (error: any) {
        dispatch(deleteAdvertisementFail(error.message)); // Ошибка при удалении объявления
    }
};
