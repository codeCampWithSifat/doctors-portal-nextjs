import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload;
};

const verifyToken = (token: string, secret: Secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

export const jwtHelpers = {
  createToken,
  decodeToken,
  verifyToken,
};
