"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "./prisma";
import { redirect } from "next/navigation";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 minute")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function logIn(data: any) {
  const admin = await prisma.admin.findUnique({
    where: { email: data.get("email") as string },
  });

  if (!admin) {
    return { error: "Email atau password tidak valid" };
  }

  const bcrypt = require("bcrypt");
  const checkPassword = await bcrypt.compare(
    data.get("password") as string,
    admin.password
  );

  if (!checkPassword) {
    return { error: "Password tidak valid" };
  }

  // session
  const expires = new Date(Date.now() + 1000 * 60 * 30);
  const session = await encrypt({ admin, expires });

  // save session
  cookies().set("session", session, { expires, httpOnly: true });
  redirect("/admin");
}

export async function logOut() {
  // hapus session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("session")?.value;
  if (!session) return;

  // update session
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 1000 * 60 * 30);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

