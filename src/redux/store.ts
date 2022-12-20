import { configureStore } from "@reduxjs/toolkit";
import signReducer from "./slices/signSlice";
import rankingReducer from "./slices/ranking";
import questionsReducer from "./slices/questions";
import appReducer from "./slices/app";

const store = configureStore({
reducer: {
    sign: signReducer,
    ranking: rankingReducer,
    questions: questionsReducer,
    app: appReducer
}
});

export type RootState = ReturnType<typeof store.getState>

export default store;