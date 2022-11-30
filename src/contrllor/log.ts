
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../Config/db';
import { UserR} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import  argon2d from 'argon2';

export const postUserLogin=async(req:Request,res:Response)=>{

    const { password,name}=req.body as  UserR
    const user = await prisma. userR.findFirst({
      where: {name },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "wrong username  " });
    }
    const isValidPassword = await argon2d.verify(user.password, password);
    if (!isValidPassword) {
      return res
        .status(400)
        .json({ message: "wrong  password " });
    }
    return res.status(200).json({ message: "يالله حيهم" });
}
    
    //______________________________________________________________
  

    export const   getUserLogin =async(req:Request,res:Response)=>{
        try{
        const GetUser= await prisma.userR.findMany(); // ارجاع جميع القيم  بدون شرط 
        return res.status(200).json(GetUser)}
        catch(error){
            return res.status(400).json({ message:"is not work "})
        }
    }
