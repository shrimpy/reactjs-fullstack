import { Request, Response, NextFunction } from "express";

export const ensureAuthenticated = function (req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.sendStatus(401);
    }
};

export const ensureAdmin = function (req: Request, res: Response, next: NextFunction) {
    // ensure authenticated user exists with admin role, 
    // otherwise send 401 response status
    if (req.user && (req.user as any).role === 'admin') {
        return next();
    } else {
        return res.sendStatus(401);
    }
};