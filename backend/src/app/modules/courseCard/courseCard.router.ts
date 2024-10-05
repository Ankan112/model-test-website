import express from 'express';
import { CourseCardController } from './courseCard.controller';
const router = express.Router();

router.get('/', CourseCardController.getAllCourses);


export const courseCardRouter = router;
