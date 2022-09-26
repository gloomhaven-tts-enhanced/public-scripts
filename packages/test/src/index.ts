import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = parseInt(process.env.PORT || "3000");
const app = express();

app.use(express.static("../.."));

app.listen(PORT, () => {
  console.log(`Test Server is up and running at: http://localhost:${PORT}`);
});
