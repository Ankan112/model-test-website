/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  _id: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
  name: string;
  phone: string;
  address: string;
  college: string;
  image: string;
  unit: string;
  batch: string;
};

export type IUserMethods = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'role' | 'password' | '_id'> | null>;

  isPasswordMatch(givenPassword: string, savedPassword: string): boolean;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

export type IUserFilter = {
  searchTerm?: string;
  role?: string;
  phoneNumber?: string;
  address?: string;
};


