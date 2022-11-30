import { NextFunction, Request, Response } from 'express';
import { prisma } from '../Config/db';
import { UserR } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import  argon2d from 'argon2';

export const postUserrigester= async(req:Request,res:Response)=>{

    try{
const newmember =req.body as UserR
const haspassword = await argon2d.hash(newmember.password)
newmember.password=haspassword
await prisma.userR.create({
    data:newmember
})
return res.status(200).json({ message: "Maprok" });

    }catch(error){
        console.log(error);
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({ message: prismaError.message });
  
    }


  }
//_______________________________________________________________________
export const getUserrigeste =async(req:Request,res:Response)=>{
    try{
    const GetUser= await prisma.userR.findMany(); // ارجاع جميع القيم  بدون شرط 
    return res.status(200).json(GetUser)}
    catch(error){
        return res.status(400).json({ message:"is not work "})
    }
}
