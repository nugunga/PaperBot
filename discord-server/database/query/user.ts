import { User } from "@prisma/client";
import { prisma } from "..";

async function create(
  id: string,
  accessToken: string,
  refreshToken: string
): Promise<User> {
  const user = prisma.user.create({
    data: {
      id: id,
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });
  return user;
}

async function update(
  id: string,
  accessToken: string,
  refreshToken: string
): Promise<User> {
  const user = prisma.user.update({
    where: { id: id },
    data: {
      accessToken: accessToken,
      refreshToken: refreshToken,
    },
  });
  return user;
}

async function findUnique(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

async function findMany(id: string): Promise<User[] | null> {
  const user = await prisma.user.findMany({
    where: {
      id: id,
    },
  });

  return user;
}

export default { create, update, findUnique, findMany };
