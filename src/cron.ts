import { checkFavorites } from "./services/check-favorites.js";

export async function run() {
  console.log("🔍 Iniciando checagem diária da loja...");
  
  try {
    await checkFavorites();
    console.log("✔️ checkFavorites finalizado com sucesso");
  } catch (err) {
    console.error("❌ Erro ao executar checkFavorites:", err);
  }
}

run();