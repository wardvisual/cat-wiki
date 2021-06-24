import express from "express";

import api from "./config/api";
import { PORT } from "./constants";
import routes from "./routes";

const app = express();

/* App Routes*/
routes(app, express);

/* Set API key to the Headers */
api(app);

const server = () => {
  /* PORT */
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
};

server();
