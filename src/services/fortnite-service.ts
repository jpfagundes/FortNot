import axios from "axios";
import { FortniteStoreEntry } from "../types/fortnite";

const API_KEY = process.env.FORT_API_KEY;

export async function fetchStore(): Promise<FortniteStoreEntry[]> {
  try {
    const url = "https://fortnite-api.com/v2/shop";
    
    const response = await axios.get(url, {
      headers: {
        "Authorization": API_KEY,
      },
    });

    return response.data.data.featured?.entries || [];
  } catch (err) {
    console.error("Erro ao buscar loja do Fortnite:", err);
    return [];
  }
}