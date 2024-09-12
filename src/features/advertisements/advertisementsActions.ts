import { createAction } from "@reduxjs/toolkit";
import { Advertisment } from "../../types/types";

export const fetchAdvertisementsStart = createAction("advertisements/fetchStart");
export const fetchAdvertisementsSuccess = createAction<Advertisment[]>("advertisements/fetchSuccess");
export const fetchAdvertisementsFail = createAction<string>("advertisements/fetchFail");

export const fetchAdvertisementStart = createAction("advertisements/fetchOneStart");
export const fetchAdvertisementSuccess = createAction<Advertisment>("advertisements/fetchOneSuccess");
export const fetchAdvertisementFail = createAction<string>("advertisements/fetchOneFail");

export const createAdvertisementStart = createAction("advertisements/createStart");
export const createAdvertisementSuccess = createAction<Advertisment>("advertisements/createSuccess");
export const createAdvertisementFail = createAction<string>("advertisements/createFail");

export const updateAdvertisementStart = createAction("advertisements/updateStart");
export const updateAdvertisementSuccess = createAction<Advertisment>("advertisements/updateSuccess");
export const updateAdvertisementFail = createAction<string>("advertisements/updateFail");

export const patchAdvertisementStart = createAction('advertisements/patchStart');
export const patchAdvertisementSuccess = createAction<Advertisment>('advertisements/patchSuccess');
export const patchAdvertisementFail = createAction<string>('advertisements/patchFail');

export const deleteAdvertisementStart = createAction("advertisements/deleteStart");
export const deleteAdvertisementSuccess = createAction<string>("advertisements/deleteSuccess");
export const deleteAdvertisementFail = createAction<string>("advertisements/deleteFail");
