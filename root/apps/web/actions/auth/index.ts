"use server";
import { db } from "@repo/database";

export const registerToDB = async (
  email: string,
  phone: string,
  name: string
) => {
  const user = await db.user.create({
    data: {
      email,
      phone,
      name,
    },
  });
  return user;
};
