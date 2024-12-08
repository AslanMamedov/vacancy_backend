export interface IVacany {
  id: string;
  title: string;
  description: string;
  created_at: string;
  endDate: string;
  questionId: string;
}

export interface IInputOptions {
  label: string;
  value: string;
}

export interface IQuestionList {
  question: string;
  options: IInputOptions[];
  rightAnswer?: string;
}

export interface IQuestions {
  [key: string]: IQuestionList;
}

export interface IQuestion {
  [key: string]: Record<string, IQuestionList>;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  surname: string;
  phoneNumber: string;
  phoneNumberPrefix: string;
}

export interface IAnswer {
  [key: string]: string;
}
