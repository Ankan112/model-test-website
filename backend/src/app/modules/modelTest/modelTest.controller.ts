import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ModelTestService } from './modelTest.service';
import { JwtPayload } from 'jsonwebtoken';
import { IModelTest } from './modelTest.interface';

const createModelTest: RequestHandler = catchAsync(async (req, res) => {
  const { ...ModelTestData } = req.body;
  const result = await ModelTestService.createModelTest(ModelTestData);

  sendResponse<IModelTest>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Model Test created successfully',
    data: result,
  });
});

const getAllModelTests: RequestHandler = catchAsync(async (req, res) => {
  const result = await ModelTestService.getAllModelTests();
  sendResponse<IModelTest[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All model tests retrived successfully',
    data: result,
  });
});

const getSingleBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ModelTestService.getSingleBook(id);

  sendResponse<IModelTest>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrived successfully',
    data: result,
  });
});

const deleteBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user: JwtPayload | null = req?.user;

  const result = await ModelTestService.deleteBook(id, user);

  sendResponse<IModelTest>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});

const updateBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  const user: JwtPayload | null = req?.user;

  const result = await ModelTestService.updateBook(id, updateData, user);

  sendResponse<IModelTest>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

export const addReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await ModelTestService.addReview(id, updateData);

  sendResponse<IModelTest>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

export const ModelTestController = {
  createModelTest,
  getAllModelTests,
  getSingleBook,
  deleteBook,
  updateBook,
  addReview,
};
