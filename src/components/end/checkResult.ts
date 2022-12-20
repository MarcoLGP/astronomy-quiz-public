import { questionSelectedProps } from "./../questions/QuestionsContent";

export type checkResultOutput = {
    result: boolean;
    result_counter: number;
}

export class CheckResult {
    private result_counter: number;
    private questionsList: questionSelectedProps[];

    constructor(questionsList: questionSelectedProps[]) {
        this.result_counter = 0;
        this.questionsList = questionsList;
    }

    public checkAlternatives(): void {
        this.questionsList.forEach(question => {
            if (question.correct === question.index) {
                this.result_counter = this.result_counter + 1;
            }
        });
    }

    public async checkResult(): Promise<checkResultOutput> {
        if (this.result_counter >= 3) {
            return { result: true, result_counter: this.result_counter };
        } else {
            return { result: false, result_counter: this.result_counter };
        }
    }
}