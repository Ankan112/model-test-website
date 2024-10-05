import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ICourseCard } from './courseCard.interface';
import { CourseCardService } from './courseCard.service';

const getAllCourses: RequestHandler = catchAsync(async (req, res) => {
  const result = await CourseCardService.getAllCourses();

  sendResponse<ICourseCard[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Model Tests list retrived successfully',
    data: result,
  });
});



export const CourseCardController = {
  getAllCourses,
};
