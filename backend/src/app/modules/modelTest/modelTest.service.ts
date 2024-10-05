import httpStatus from 'http-status';
import ApiError from '../../../errors/apiError';
import { JwtPayload } from 'jsonwebtoken';
import { IModelTest } from './modelTest.interface';
import { ModelTest } from './modelTest.model';

const createModelTest = async (payload: IModelTest): Promise<IModelTest | null> => {
  const result = await ModelTest.create(payload);
  return result;
};

const getAllModelTests = async (
): Promise<IModelTest[]> => {
  const result = await ModelTest.find({})
  return result;
};

const getSingleBook = async (id: string): Promise<IModelTest | null> => {
  const result = await ModelTest.findById(id).populate('reviews');
  return result;
};

const deleteBook = async (
  id: string,
  user: JwtPayload | null
): Promise<IModelTest | null> => {
  // check if the user is the owner of this cow or not.
  const isUserMatch = await ModelTest.findOne({
    $and: [{ _id: id }, { creator: user && user?.id }],
  });
  if (!isUserMatch) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      'your are not authorized to delete this book.'
    );
  }

  const result = await ModelTest.findByIdAndDelete(id).populate('reviews');
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IModelTest>,
  user: JwtPayload | null
): Promise<IModelTest | null> => {
  const isExist = await ModelTest.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'cow not found');
  }

  // check if the user is the owner of this cow or not.
  const isUserMatch = await ModelTest.findOne({
    $and: [{ _id: id }, { creator: user && user?.id }],
  });

  if (!isUserMatch) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      'your are not authorized to update this cow'
    );
  }

  const result = await ModelTest.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('reviews');

  return result;
};

const addReview = async (
  id: string,
  payload: Partial<IModelTest>
): Promise<IModelTest | null> => {
  const isExist = await ModelTest.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'book not found');
  }
  const result = await ModelTest.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: payload } },
    {
      new: true,
    }
  ).populate('reviews');

  return result;
};

export const ModelTestService = {
  createModelTest,
  getAllModelTests,
  getSingleBook,
  deleteBook,
  updateBook,
  addReview,
};
