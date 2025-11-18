import { PrismaClient } from "@prisma/client";
import { fetchStore } from "./fortnite-service.js";
import { sendNotification } from "./notify-service.js";
import { FortniteStoreEntry, FortniteItem } from "../types/fortnite.js";

const prisma = new PrismaClient();

export async function checkFavorites(): Promise<string[]> {
  const favorites = await prisma.favorite.findMany();
  const storeItems: FortniteStoreEntry[] = await fetchStore();

  const matchedItems: string[] = [];

  for (const fav of favorites) {
    storeItems.forEach((entry) => {
      entry.items.forEach((item: FortniteItem) => {
        if (item.name.toLowerCase() === fav.name.toLowerCase()) {
          matchedItems.push(item.name);
        }
      });
    });
  }

  console.log("🛒 Itens da loja recebidos (nomes):");

  storeItems.forEach((entry) => {
    entry.items.forEach((item) => {
      console.log(" -", item.name);
    });
  });

  console.log("⭐ Favoritos no banco:", favorites.map(f => f.name));


  if (matchedItems.length > 0) {
    console.log("🎯 Itens encontrados na loja:", matchedItems);
    await sendNotification(matchedItems);
  } else {
    console.log("❌ Nenhum favorito encontrado na loja hoje.");
  }

  return matchedItems;
}
