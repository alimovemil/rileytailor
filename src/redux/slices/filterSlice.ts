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
        toggleCheckbox: (state, action: PayloadAction<Record<string, boolean>>) => {
            const updatedFilter = action.payload;
            state.filter = { ...state.filter, ...updatedFilter };
        },
        setRangeValues: (state, action: PayloadAction<[number, number]>) => {
            const [start, end] = action.payload;
            state.rangeValues = [start, end];
        },
    },
});

export const { toggleCheckbox, setRangeValues } = filterSlice.actions;

export default filterSlice.reducer;
