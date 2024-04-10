"use server";
import prisma from "./prisma";

export async function createAdmin(data: any) {
  await prisma.admin.create({
    data: data,
  });
}

// create
export async function createProduct(data: any, id: any) {
  await prisma.product.create({
    data: { ...data, adminId: id },
  });
}

// delete
export async function deleteProduct(id: any) {
  await prisma.product.delete({
    where: { id: id },
  });
}

// update
export async function updateProduct(data: any, id: any) {
  await prisma.product.update({
    data: { ...data },
    where: { id: id },
  });
}
