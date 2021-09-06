import express from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/./../.env" });

// rest of the code remains same
const app = express();
const PORT = process.env.PORT ?? 8080;
app.get("/", (req, res) => res.send(`Welcome to ${process.env.APP_NAME}`));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
