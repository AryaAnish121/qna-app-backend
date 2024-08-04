import express from "express";
import cors from "cors";
import createDocx from "./createDocx.js";
import { Packer } from "docx";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/generate", async (req, res) => {
  const doc = createDocx(req.body);
  const buffer = await Packer.toBuffer(doc);
  res.setHeader("Content-Disposition", `attachment; filename="document.docx"`);
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.send(buffer);
});

app.listen(PORT, function () {
  console.log("server started at " + PORT);
});
