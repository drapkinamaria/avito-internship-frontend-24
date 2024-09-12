import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Draft } from "immer"; // Импортируем Draft для корректной работы с состоянием
import { Advertisment } from "../../types/types";
import {
    fetchAdvertisementsStart,
    fetchAdvertisementsSuccess,
    fetchAdvertisementsFail,
    fetchAdvertisementStart,
    fetchAdvertisementSuccess,
    fetchAdvertisementFail,
    createAdvertisementStart,
    createAdvertisementSuccess,
    createAdvertisementFail,
    updateAdvertisementStart,
    updateAdvertisementSuccess,
    updateAdvertisementFail,
    deleteAdvertisementStart,
    deleteAdvertisementSuccess,
    deleteAdvertisementFail, patchAdvertisementStart, patchAdvertisementSuccess, patchAdvertisementFail,
} from "./advertisementsActions";
import {AdvertisementState} from "./types";


const initialState: AdvertisementState = {
    advertisements: [],
    selectedAdvertisement: null,
    status: 'idle',
    error: null,
};

export const advertisementsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAdvertisementsStart, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchAdvertisementsSuccess, (state, action: PayloadAction<Advertisment[]>) => {
            state.advertisements = action.payload as Draft<Advertisment>[]; // Приведение массива к Draft
            state.status = 'succeeded';
        })
        .addCase(fetchAdvertisementsFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })

        .addCase(fetchAdvertisementStart, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchAdvertisementSuccess, (state, action: PayloadAction<Advertisment>) => {
            state.selectedAdvertisement = action.payload as Draft<Advertisment>; // Приведение объекта к Draft
            state.status = 'succeeded';
        })
        .addCase(fetchAdvertisementFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })

        .addCase(createAdvertisementStart, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(createAdvertisementSuccess, (state, action: PayloadAction<Advertisment>) => {
            state.advertisements.push(action.payload as Draft<Advertisment>); // Приведение к Draft при добавлении в массив
            state.status = 'succeeded';
        })
        .addCase(createAdvertisementFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })

        .addCase(updateAdvertisementStart, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(updateAdvertisementSuccess, (state, action: PayloadAction<Advertisment>) => {
            const index = state.advertisements.findIndex(ad => ad.id === action.payload.id);
            if (index !== -1) {
                state.advertisements[index] = action.payload as Draft<Advertisment>; // Приведение объекта к Draft при обновлении
            }
            state.status = 'succeeded';
        })
        .addCase(updateAdvertisementFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })

        .addCase(deleteAdvertisementStart, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(deleteAdvertisementSuccess, (state, action: PayloadAction<string>) => {
            state.advertisements = state.advertisements.filter(ad => ad.id !== action.payload);
            state.status = 'succeeded';
        })
        .addCase(deleteAdvertisementFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        });

    builder
        .addCase(patchAdvertisementStart, (state) => {
            state.status = 'loading';
        })
        .addCase(patchAdvertisementSuccess, (state, action: PayloadAction<Advertisment>) => {
            state.status = 'succeeded';
            const index = state.advertisements.findIndex(ad => ad.id === action.payload.id);
            if (index !== -1) {
                state.advertisements[index] = action.payload as Draft<Advertisment>;
            }
        })
        .addCase(patchAdvertisementFail, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        });
});
