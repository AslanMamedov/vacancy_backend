import { IQuestions } from 'src/types';

export const generateRightAnswers = (
  questions: IQuestions,
): Record<string, string> => {
  return Object.entries(questions).reduce(
    (acc, [key, value]) => {
      acc[key] =
        value.options.find((option) => option.value === '1')?.value || '';
      return acc;
    },
    {} as Record<string, string>,
  );
};
