"use server";
import prisma from "./prisma";

export async function createAdmin(data: any) {
  await prisma.admin.create({
    data: data,
  });
}
