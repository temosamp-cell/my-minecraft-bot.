import express from "express";

const app = express();

app.get("/api/healthz", (_req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
