import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};

app.post(
  "/users",
  [
    body("name")
      .trim() // Sanitization(Validation을 위한 전처리), trim() -> 공백제거
      .notEmpty()
      .withMessage("이름을 입력해 주세요.")
      .isLength({ min: 2, max: 6 })
      .withMessage("이름은 2자 이상, 6자 이하로 입력해 주세요."),
    body("age")
      .notEmpty()
      .withMessage("나이를 입력해 주세요.")
      .isInt()
      .withMessage("숫자를 입력해 주세요."),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("이메일을 입력해 주세요.")
      .isEmail()
      .withMessage("이메일 형식에 맞춰 입력해 주세요.")
      .normalizeEmail(), // 이메일을 소문자로
    body("job.name").notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [
    param("email").isEmail().withMessage("이메일 형식에 맞춰 입력해 주세요."),
    validate,
  ],
  (req, res, next) => {
    res.send("💌");
  }
);

app.listen(8080);
