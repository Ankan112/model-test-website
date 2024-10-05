/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICourseCard } from './courseCard.interface';
import { ReadSoon } from './courseCard.model';

const getAllCourses = async (): Promise<ICourseCard[] | null> => {
  const result = await ReadSoon.find({});

  return result;
};




export const CourseCardService = {
  getAllCourses,
};
