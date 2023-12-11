import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    rangeValues: [number, number];
}

const initialState: FilterState = {
    rangeValues: [1000, 987000],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setRangeValues: (state, action: PayloadAction<[number, number]>) => {
            const [start, end] = action.payload;
            state.rangeValues = [start, end];
        },
    },
});

export const { setRangeValues } = filterSlice.actions;

export default filterSlice.reducer;
