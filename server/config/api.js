import { CAT_API_KEY } from "../constants";

export default (app) => {
  app.use((req, res, next) => {
    res.setHeader("x-api-key", CAT_API_KEY);
  });
};

export const catAPI = {
  BREEDS: `https://api.thecatapi.com/v1/breeds`,
  CATEGORIES: `https://api.thecatapi.com/v1/categories`,
};
