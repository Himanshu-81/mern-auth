import express from "express";
import { PORT } from "./constant.js";

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT} `);
});
