import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET: /users/:id");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /users/:id");
});

router.put("/", (req, res) => {
  res.status(201).send("PUT: /users/:id");
});

router.delete("/", (req, res) => {
  res.status(201).send("DELETE: /users/:id");
});

export default router;
