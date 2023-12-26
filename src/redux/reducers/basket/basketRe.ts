import { BasketState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const initialState: BasketState = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        CauldronsSave: (state, action: PayloadAction<any>) => {

            const updateItem = {
                ...action.payload,
                count: 1,
                price: action.payload.price.toString()
            }

            const findIndex = state.products.findIndex((i: any) => i.key === updateItem.key);

            if (findIndex !== -1) state.products[findIndex].count++;
            else {
                state.products.push(updateItem);
            }
        },
        cauldronsSlices: (state, action: PayloadAction<any>) => {
            const findItem = state.products.find((i: any) => i.key === action.payload.key);

            const findIndex = state.products.findIndex((i: any) => i.key === action.payload.key);

            if(findIndex !== -1) {
                if (findItem && findItem.count > 1) state.products[findIndex].count--;
                else {
                    state.products.splice(findIndex, 1);
                }
            }
        },

        updateBasketInfo: (state) => {
            state.totalPrice = state.products.reduce((total: number, item: { price: string; count: number; }) => {
                const itemPrice = parseFloat(item.price.replace(/\D/g, ''));

                return !isNaN(itemPrice) ? total + itemPrice * item.count : total;
            }, 0);

            state.totalItems = state.products.reduce((total: number, item: { count: number }) => total + item.count, 0);
        },
    }
});
export const { CauldronsSave, cauldronsSlices, updateBasketInfo } = profileReducer.actions;

export const GetCauldrons = (state: RootState): any[] => state.profile.products;

export default profileReducer.reducer;
