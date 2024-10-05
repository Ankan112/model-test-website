import { Model } from 'mongoose';

export type IQuiz = {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct_answer: string;
};

export type IModelTest = {
  title: string;
  time_in_minutes: number;
  total_questions: number;
  locked: boolean;
  quizzes?: IQuiz[];
};

export type ModelTestModel = Model<IModelTest, Record<string, unknown>>;


