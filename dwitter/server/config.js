import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`key ${key} is undefined!`);
  }
  return value;
}

export const config = {
  host: {
    server: parseInt(required("HOST_SERVER", "8080")),
    client: parseInt(required("HOST_CLIENT", "3000")),
  },
  jwt: {
    secretKey: required("JWT_SECRET_KEY"),
    expireSec: parseInt(required("JWT_EXPIRE_SEC", "172800")),
  },
  bcrypt: {
    salt: parseInt(required("BCRYPT_SALT", "12")),
  },
};
