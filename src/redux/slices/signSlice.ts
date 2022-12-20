import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userProps = {
    id: string,
    name: string,
    photo?: string,
    email: string,
    password: string,
    level: number
}

type signSliceStates = {
    user: userProps | Record<string, never>;
    userToRegister: {
        name: string | null | undefined;
        email: string | null | undefined;
        photo?: string | null | undefined;
    },
    signLog: string;
    recoveryPassLog: string;
}

const initialState = { user: {}, userToRegister: {}, signLog: "", recoveryPassLog: "" } as signSliceStates;

export const signSlice = createSlice({
    name: "sign",
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<userProps>) => {
            state.user = payload;
        },
        logoutUser: (state) => {
            state.user = {};
        },
        updateLevelUser: (state, { payload }: PayloadAction<number>) => {
            if (state.user) state.user.level = payload;
        },
        setSignLog: (state, { payload }: PayloadAction<string>) => {
            state.signLog = payload;
        },
        clearSignLog: (state) => {
            state.signLog = "";
        },
        setRecoveryPassLog: (state, {payload}: PayloadAction<string>) => {
            state.recoveryPassLog = payload;
        },
        clearRecoveryPassLog: (state) => {
            state.recoveryPassLog = "";
        }
    }
});

export const { setUser, setSignLog, clearSignLog, updateLevelUser, logoutUser, clearRecoveryPassLog, setRecoveryPassLog } = signSlice.actions;
export default signSlice.reducer;