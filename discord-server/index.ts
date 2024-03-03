import { createApp } from "./system/createApp";
import db from "./database";
import { config } from "dotenv";

config();

const next = require("next");
const PORT = 3001;

export default async function main() {
  console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
  try {
    // db.connect();

    const dev = process.env.NODE_ENV !== "production";
    const hostname = "localhost";

    const app = next({ dev, hostname, PORT }).prepare()
        .then(() => {
          const app = createApp();
          app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
        });
  } catch (err) {
    console.log(err);
  } finally {
      // db.disconnect()
  }
}
