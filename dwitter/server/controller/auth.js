import * as authRep from "../data/auth.js";

export async function signup(req, res, next) {
  const { username, password, name, email } = req.body;
  const auth = await authRep.getByUsername(username);
  const result = await (auth
    ? { message: `${username}은 이미 존재하는 아이디 입니다.` }
    : authRep.create(username, password, name, email));
  res.status(201).json(result);
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const auth = await authRep.getByUsername(username);
  const result = await (auth
    ? authRep.compare(auth, password)
    : { message: `${username}은 존재하지 않는 아이디입니다.` });
  res.status(200).json(result);
}

export async function me(req, res, next) {
  res.send("me");
}
