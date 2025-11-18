import axios from "axios";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL ?? "";

if (!WEBHOOK_URL) {
  throw new Error("A variável DISCORD_WEBHOOK_URL não está definida no .env");
}

export async function sendNotification(items: string[]) {
  try {
    await axios.post(WEBHOOK_URL, {
      content: `🎉 **Itens que você queria chegaram na loja!**\n\n${items
        .map((i) => `• ${i}`)
        .join("\n")}`,
    });

    console.log("Notificação enviada:", items);
  } catch (err) {
    console.error("Erro ao enviar notificação:", err);
  }
}