import { Router } from "express";
import * as controller from "../controllers/favorites-controller.js";

const router = Router();

router.post("/", controller.createFavorite);
router.get("/", controller.listFavorites);

export default router;