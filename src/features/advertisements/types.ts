import {Advertisment} from "../../types/types";
import {Draft} from "immer";

export type AdvertisementState = {
    advertisements: Draft<Advertisment>[];
    selectedAdvertisement: Draft<Advertisment> | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
