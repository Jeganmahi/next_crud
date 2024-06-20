// pages/api/create-new.js
'use server'
import prisma from "@/app/server/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function submitForm(formdata) {
  const email = formdata.get('email');
  const pass = formdata.get('pass')
  const form = {
    name: email,
    Pass: pass,

  }
  const create = await prisma.login1.create({
    data: {
      name: email,
      Pass: pass,

    }
  })
}

export async function handleDelete(uid) {

  const deleteUser = await prisma.login1.delete({
    where: {
      id: uid
    },
  })
  revalidatePath('/')
  
}

export async function handleUpdate(formData) {


  // const id=formData.get('uid');
  const name = formData.name;
  const pass = formData.pass;
  const id = formData.uid;

  console.log(name);
  console.log(pass)



  const updateUser = await prisma.login1.update({
    where: {
      id: id
    },
    data: {
      name: name,
      Pass: pass
    },
  })
}

export async function updateUser(userId, formData) {
  console.log(userId,formData)
}