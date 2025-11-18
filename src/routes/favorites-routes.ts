import { Router } from "express";
import * as controller from "../controllers/favorites-controller.js";

const router = Router();

router.post("/", controller.createFavorite);
router.get("/", controller.listFavorites);
router.delete("/:id", controller.deleteFavorite);

export default router;