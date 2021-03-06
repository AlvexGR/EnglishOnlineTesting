import { HistoryModel } from "@lib/models/history.model";
import { ExamModel } from "@lib/models/exam.model";
import { IChoice, IAnswer } from "@lib/interfaces/question.interface";

export class HistoryBuilder {
  private _history: HistoryModel;

  constructor(id?: string) {
    this._history = new HistoryModel(id);
  }

  withUserId(userId: string): HistoryBuilder {
    this._history.userId = userId;
    return this;
  }

  withExamId(id: string): HistoryBuilder {
    this._history.examId = id;
    return this;
  }

  withExam(exam: ExamModel): HistoryBuilder {
    this._history.exam = exam;
    return this;
  }

  withTotalQuestions(total: number): HistoryBuilder {
    this._history.totalQuestions = total;
    return this;
  }

  withCorrectAnswers(total: number): HistoryBuilder {
    this._history.correctAnswers = total;
    return this;
  }

  withAnswersArray(answers: Array<IAnswer>): HistoryBuilder {
    this._history.answers = answers;
    return this;
  }

  withAnswersMap(answers: Map<string, IChoice>): HistoryBuilder {
    this._history.answers = this._history.getAnswerArray(answers);
    return this;
  }

  withDate(date: Date): HistoryBuilder {
    this._history.date = date;
    return this;
  }

  build(): HistoryModel {
    return this._history;
  }
}
