import {config} from '../constants/config';
import {Question} from '../types/Question';

export const getQuestionsService: () => Promise<Question[]> = async () => {
  return fetch(`${config.API_URL}/getQuestions`).then(response => {
    return response.json();
  });
};
