import mongoose from 'mongoose';
import { ModelTestModel, IModelTest, } from './modelTest.interface';
const { Schema } = mongoose;


const modelTestSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    time_in_minutes: {
      type: Number,
      required: true,
    },
    total_questions: {
      type: Number,
      required: true,
    },
    locked: {
      type: Boolean,
      required: true,
    },
    quizzes: [
      {
        question: {
          type: String,
          required: true,
        },
        a: {
          type: String,
          required: true,
        },
        b: {
          type: String,
          required: true,
        },
        c: {
          type: String,
          required: true,
        },
        d: {
          type: String,
          required: true,
        },
        correct_answer: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ModelTest = mongoose.model<IModelTest, ModelTestModel>('ModelTest', modelTestSchema);
