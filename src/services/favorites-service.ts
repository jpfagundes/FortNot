import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createFavorite(name: string, type: string) {
  return prisma.favorite.create({
    data: { name, type },
  });
}

export async function listFavorites() {
  return prisma.favorite.findMany({
    orderBy: { createdAt: "desc" },
  });
}