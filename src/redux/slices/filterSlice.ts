import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    filter: Record<string, boolean>;
    rangeValues: [number, number];
}

const initialState: FilterState = {
    filter: {},
    rangeValues: [1000, 987000],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleCheckbox: (state, action: PayloadAction<string>) => {
            const checkbox = action.payload;
            state.filter[checkbox] = !state.filter[checkbox];
        },
        setRangeValues: (state, action: PayloadAction<[number, number]>) => {
            state.rangeValues = action.payload;
        },
    },
});

export const { toggleCheckbox, setRangeValues } = filterSlice.actions;

export default filterSlice.reducer;
