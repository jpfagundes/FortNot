import { Request, Response } from "express";
import * as favoriteService from "../services/favorites-service";

export async function createFavorite(req: Request, res: Response) {
  try {
    const { name, type } = req.body;

    if (!name || !type) {
      return res.status(400).json({ error: "name e type são obrigatórios." });
    }

    const favorite = await favoriteService.createFavorite(name, type);
    return res.status(201).json(favorite);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar favorito." });
  }
}

export async function listFavorites(req: Request, res: Response) {
  try {
    const favorites = await favoriteService.listFavorites();
    return res.json(favorites);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar favoritos." });
  }
}

export async function deleteFavorite(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await favoriteService.deleteFavorite(id);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar favorito." });
  }
} 