import express from "express";
import cors from "cors";
import createDocx from "./createDocx.js";
import { Packer } from "docx";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 5000;

// TODO: add save functionality

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/generate", async (req, res) => {
  const doc = createDocx(req.body);
  const buffer = await Packer.toBuffer(doc);
  const filePath = `out/${uuidv4()}.docx`;
  fs.writeFileSync(filePath, buffer);
  res.download(filePath);
});

app.listen(PORT, function () {
  console.log("server started at " + PORT);
});
