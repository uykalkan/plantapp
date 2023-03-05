import {CategoryResponse} from '../types/Category';
import {config} from '../constants/config';

export const getCategoriesService: () => Promise<CategoryResponse> =
  async () => {
    return fetch(`${config.API_URL}/getCategories`).then(response =>
      response.json(),
    );
  };
