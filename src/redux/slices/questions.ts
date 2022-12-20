import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questionSelectedProps } from "../../components/questions/QuestionsContent";

type questionsSliceStates = {
    questionsSelecteds: Array<questionSelectedProps>
}

const initialState = { questionsSelecteds: [] } as questionsSliceStates;

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestionSelected: (state, {payload}: PayloadAction<questionSelectedProps>) => {
            state.questionsSelecteds.push(payload);
        },
        clearQuestions: (state) => {
            state.questionsSelecteds = [];
        }
    }
});

export const { addQuestionSelected, clearQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;