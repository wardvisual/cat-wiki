import { BASE_API_URL } from "../constants";

import breeds from "./breeds";
import categories from "./categories";
import errorHandler from "../middlewares/errorHandler";

export default (app, express) => {
  app.use(express.json());

  app.use(`${BASE_API_URL}/breeds`, breeds);
  app.use(`${BASE_API_URL}/categories`, categories);

  app.use(errorHandler);
};
