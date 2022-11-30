import { UserR } from "@prisma/client";
import {Request, Response , NextFunction } from "express";
import * as jwt from 'jsonwebtoken';



export const protect = (req: Request, res: Response, next: NextFunction) => {
    try{
        const header = req.headers.authorization;
        if(!header){
            return res.status(401).json({message: "You are not authorized"});
        }
        console.log(header);
        const user = jwt.verify(header, process.env.JWT_SECERT as string);
        res.locals.user = user;
        next();
    }catch(error){
        console.log(error);
        return res.status(401).json({
            message: "You are not authorized"
        });
    }
};

export const authorized = (role:string) => (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user as UserR;
    if(role !== user.role) {
        res.status(403).json({
            message: "You are not authorized "
        })
    }
    next();
}