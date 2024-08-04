import express from "express";
import cors from "cors";
import createDocx from "./createDocx.js";

const app = express();
const PORT = process.env.PORT || 5000;

// TODO: respond with proper files
// TODO: show file download and catch errors if any

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/generate", function (req, res) {
  createDocx(req.body);
  // ---------------------------------------------
  res.send("test repsonse");
});

app.listen(PORT, function () {
  console.log("server started at " + PORT);
});
