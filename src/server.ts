import "dotenv/config";
import express from "express";
import favoriteRoutes from "./routes/favorites-routes.js";
import { checkFavorites } from "./services/check-favorites.js";
import "./cron.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/favorites", favoriteRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

checkFavorites().then(result =>
  console.log("Teste manual:", result)
);

checkFavorites().then(result => console.log("Teste manual:", result));