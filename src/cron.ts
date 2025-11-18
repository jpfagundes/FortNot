import cron from "node-cron";
import { checkFavorites } from "./services/check-favorites.js";

// cron.schedule("*/1 * * * *", () => console.log("rodando..."));

checkFavorites()

// cron.schedule("*/1 * * * *", async () => {
//   console.log("🔍 Executando cron...");
//   try {
//     await checkFavorites();
//     console.log("✔️ checkFavorites finalizou");
//   } catch (err) {
//     console.error("❌ Erro dentro do cron:", err);
//   }
// });