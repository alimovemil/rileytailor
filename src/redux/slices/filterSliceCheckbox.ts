import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckboxState {
    [key: string]: boolean;
    isSelected13to15: boolean;
}

const initialState: CheckboxState = {
    isSelected13to15: false,
};

const filterSliceCheckbox = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        setCheckboxState: (state, action: PayloadAction<string>) => {
            const checkbox = action.payload;
            state[checkbox] = !state[checkbox];

            if (checkbox === '13 - 15') {
                state.isSelected13to15 = !state.isSelected13to15;
            }
        },
    },
});

export const { setCheckboxState } = filterSliceCheckbox.actions;

export default filterSliceCheckbox.reducer;
