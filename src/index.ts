import * as express from "express";
import deals from "./controllers/deals";
import { createConnection } from "typeorm";

const connection = express();
const PORT = 1800;

connection.listen(PORT,async () => {
  await createConnection();
  console.log(`Listening on port ${PORT}`);
});

connection.use("/deals", deals);
