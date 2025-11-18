import { PrismaClient } from "@prisma/client";
import { fetchStore } from "./fortnite-service.js";
import { sendNotification } from "./notify-service.js";
import { FortniteStoreEntry } from "../types/fortnite.js";

const prisma = new PrismaClient();

export async function checkFavorites(): Promise<string[]> {
  const favorites = await prisma.favorite.findMany();
  const storeItems = await fetchStore();

  const shopItemNames: string[] = storeItems.flatMap(
    (entry: FortniteStoreEntry) => {
      const names: string[] = [];

      // 1️⃣ bundle.name
      if (entry.bundle?.name) {
        names.push(entry.bundle.name);
      }

      // 2️⃣ items[].name
      if (entry.items?.length) {
        names.push(...entry.items.map((i) => i.name));
      }

      // 3️⃣ brItems[].name
      if (entry.brItems?.length) {
        names.push(...entry.brItems.map((i) => i.name));
      }

      // 4️⃣ tracks[].title
      if (entry.tracks?.length) {
        names.push(...entry.tracks.map((t: any) => t.title));
      }

      return names;
    }
  );

  console.log(
    "⭐ Favoritos no banco:",
    favorites.map((f) => f.name)
  );

  const encontrados = favorites.filter((fav) =>
    shopItemNames.some(
      (shop) => shop.toLowerCase().trim() === fav.name.toLowerCase().trim()
    )
  );

  if (encontrados.length > 0) {
    const nomes = encontrados.map((e) => e.name);
    console.log("🎯 Encontrados na loja:", nomes);
    await sendNotification(nomes);
    return nomes;
  }

  console.log("❌ Nenhum favorito encontrado hoje.");
  return [];
}
