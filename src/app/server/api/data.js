'use server'
import { PrismaClient } from "@prisma/client";

export  default async  function getArray(){
    const prisma = new PrismaClient();
    const data= await prisma.login1.findMany();

return data;
    
}