import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appSliceStates = {
    authorization: boolean;
}

const initialState = { authorization: false } as appSliceStates;

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAuthorization: (state, {payload}: PayloadAction<boolean>) => {
            state.authorization = payload;
        }
    }
});

export const { setAuthorization } = appSlice.actions;
export default appSlice.reducer;