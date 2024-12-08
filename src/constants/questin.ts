import { IQuestion } from 'src/types';
import {
  dataScientistQuestions,
  uiUxDesignerQuestions,
  frontendQuestions,
  backendQuestions,
  devOpsQuestions,
} from './questions';

export const question: IQuestion = {
  '4890fe8e-afb7-4cc2-958d-cac65d31488a': dataScientistQuestions,
  'd7ca8c34-6bd2-4170-b42e-5c22a5b36c43': uiUxDesignerQuestions,
  '96fecdff-7bbf-463f-830a-9e7a60608e74': frontendQuestions,
  'b6e96976-de03-4e7c-8039-35715b3d5d28': backendQuestions,
  'f5aa94fc-33c7-48c6-8a65-7cae7095d2e6': devOpsQuestions,
};
