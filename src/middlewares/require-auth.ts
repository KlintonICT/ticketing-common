import { Request, Response, NextFunction } from 'express';
import { NotAuthenticatedError } from '../errors/not-authorized-error';

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthenticatedError();
  }

  next();
};
