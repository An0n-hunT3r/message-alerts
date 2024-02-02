import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";

import { PORT } from "./config/index.js";
import routes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
