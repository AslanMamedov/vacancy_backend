import { generateRightAnswers } from 'src/utils';
import {
  uiUxDesignerQuestions,
  dataScientistQuestions,
  frontendQuestions,
  backendQuestions,
  devOpsQuestions,
} from './questions';

const dataScientistRightAnswer = generateRightAnswers(dataScientistQuestions);
const uiUxDesignerRightAnswer = generateRightAnswers(uiUxDesignerQuestions);
const frontendRightAnswer = generateRightAnswers(frontendQuestions);
const backendRightAnswer = generateRightAnswers(backendQuestions);
const devOpsRightAnswer = generateRightAnswers(devOpsQuestions);

export const answers = {
  'd7ca8c34-6bd2-4170-b42e-5c22a5b36c43': uiUxDesignerRightAnswer,
  '4890fe8e-afb7-4cc2-958d-cac65d31488a': dataScientistRightAnswer,
  '96fecdff-7bbf-463f-830a-9e7a60608e74': frontendRightAnswer,
  'b6e96976-de03-4e7c-8039-35715b3d5d28': backendRightAnswer,
  'f5aa94fc-33c7-48c6-8a65-7cae7095d2e6': devOpsRightAnswer,
};
