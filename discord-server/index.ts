import { createApp } from "./system/createApp";
import db from "./database";
import { config } from "dotenv";

config();

const next = require("next");
const PORT = 3001;

export default async function main() {
  console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
  try {
    db.connect();

    const dev = process.env.NODE_ENV !== "production";
    const hostname = "localhost";
    const port = 3000;

    const nextApp = next({ dev, hostname, port }).prepare();
    const app = createApp();

    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    db.disconnect();

    console.log(err);
  }
}
