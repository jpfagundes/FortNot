import "./cron.js";
import express from "express";
import dotenv from "dotenv";
import favoriteRoutes from "./routes/favorites-routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/favorites", favoriteRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});