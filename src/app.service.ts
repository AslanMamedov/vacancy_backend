import { BadRequestException, Injectable } from '@nestjs/common';
import { IQuestions, IVacany } from './types';
import { vacancies } from './constants/vacancies';
import { question } from './constants/questin';
import { generateSteps, getPercentage } from './utils';
import * as uuid from 'uuid';
import { answers } from './constants/answers';

const vacancyData = {};
@Injectable()
export class AppService {
  getVacancies(): Promise<IVacany[]> {
    const data: Promise<IVacany[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(vacancies);
      }, 2000);
    });
    return data;
  }

  time(time: number = Date.now() + 1 * 60 * 1000) {
    const startDate = time;

    return () => {
      const start: number = startDate;
      const currentTime = Date.now();
      const t = start - currentTime;
      const time = currentTime + t;
      return time;
    };
  }
  getVacancyQuestions(id: string): Promise<{
    question: IQuestions;
    steps: number[];
  }> {
    const questionId = vacancies.find((item) => item.id === id).questionId;
    if (!question[questionId]) {
      throw new BadRequestException('Not found');
    }
    const steps = generateSteps(Object.keys(question[questionId]).length);
    const data: Promise<{
      question: IQuestions;
      steps: number[];
    }> = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          question: question[questionId],
          steps: steps,
        });
      }, 1000);
    });

    return data;
  }

  applayVacancy({ data }: any) {
    const id = uuid.v4();
    vacancyData[id] = {
      userData: data?.userData,
      answers: data?.answerQuestions,
    };
    return { id };
  }

  getUserAsnwerVacancy(id: string, answerId: string) {
    const vacancy = vacancyData[answerId];
    try {
      let point = 0;
      const vacancyData = vacancies?.find((item) => item.id === id);
      const userInfo = { ...vacancy?.userData };
      const aboutVacancy = { ...vacancyData };
      const questionId = vacancyData?.questionId;
      const questions = question[questionId];
      delete userInfo?.id;
      delete aboutVacancy?.id;
      delete aboutVacancy?.questionId;
      const questionList = Object.entries(questions).map(([key, value]) => {
        const rightAnswer =
          vacancy?.answers?.[key] === answers[questionId][key];
        if (rightAnswer) {
          point += 1;
        }
        return {
          question: value.question,
          options: value.options.find(
            (item) => item?.value === vacancy?.answers?.[key],
          )?.label,
          rightAnswer: rightAnswer,
          point: rightAnswer ? 1 : 0,
        };
      });
      const coutPoint = getPercentage(point, questionList.length);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            userInfo,
            aboutVacancy: aboutVacancy,
            answerQuestins: questionList,
            pointData: {
              point: coutPoint,
              questinCount: questionList.length,
              rightAnswer: point,
            },
          });
        }, 1000);
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  applyCV({ data, id, answerId }: any) {
    console.log(data, id, answerId);
    const ID = uuid.v4();
    return { ID };
  }
}
