import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ModelTestValidation } from './modelTest.validation';
import { ModelTestController } from './modelTest.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(ModelTestValidation.createModelTestZodValidation),
  ModelTestController.createModelTest
);

router.get('/:id', ModelTestController.getSingleBook);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ModelTestController.deleteBook
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(ModelTestValidation.updateModelTestZodValidation),
  ModelTestController.updateBook
);

router.patch(
  '/add-review/:id',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(ModelTestValidation.updateModelTestZodValidation),
  ModelTestController.addReview
);

router.get('/', ModelTestController.getAllModelTests);

export const ModelTestRouter = router;
