import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userProps } from "./signSlice";

type rankingSliceStates = {
    users: Array<{
        id: string,
        name: string,
        photo?: string,
        email: string,
        password: string,
        level: number
    }>,
    changeOrder: boolean
}

const initialState = { users: [], changeOrder: false } as rankingSliceStates;

export const rankingSlice = createSlice({
    name: "ranking",
    initialState,
    reducers: {
        setAllUsers: (state, { payload }: PayloadAction<userProps[]>) => {
            state.users = payload.sort(({ level: a }, { level: b }) => b - a);
        },
        setChangeOrderAllUsers: (state) => {
            state.users.sort(({ level: a }, { level: b }) => state.changeOrder ? b - a : a - b);
            state.changeOrder = !state.changeOrder;
        }
    }
});

export const { setAllUsers, setChangeOrderAllUsers } = rankingSlice.actions;
export default rankingSlice.reducer;