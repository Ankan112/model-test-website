import { z } from 'zod';

const createModelTestZodValidation = z.object({
  body: z.object({
    title: z.string(),
    time_in_minutes: z.number(),
    total_questions: z.number(),
    locked: z.boolean(),
    quizzes: z.array(z.object({
      question: z.string(),
      a: z.string(),
      b: z.string(),
      c: z.string(),
      d: z.string(),
      correct_answer: z.string(),
    }))
  }),
});

const updateModelTestZodValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    time_in_minutes: z.number().optional(),
    total_questions: z.number().optional(),
    locked: z.boolean().optional(),
    quizzes: z.array(z.object({
      question: z.string().optional(),
      a: z.string().optional(),
      b: z.string().optional(),
      c: z.string().optional(),
      d: z.string().optional(),
      correct_answer: z.string().optional(),
    })).optional(),
  }),
});

export const ModelTestValidation = {
  createModelTestZodValidation,
  updateModelTestZodValidation,
};
