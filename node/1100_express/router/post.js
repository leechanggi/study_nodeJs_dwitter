import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET: /posts/:id");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /posts/:id");
});

router.put("/", (req, res) => {
  res.status(201).send("PUT: /posts/:id");
});

router.delete("/", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;
