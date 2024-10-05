/* eslint-disable @typescript-eslint/no-this-alias */
import mongoose from 'mongoose';
import { ICourseCard } from './courseCard.interface';

const { Schema } = mongoose;

const courseCardSchema = new Schema<ICourseCard>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ReadSoon = mongoose.model<ICourseCard>('CourseCard', courseCardSchema);
