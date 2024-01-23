import { createApp } from "./utils/createApp";
import { config } from "dotenv";
config();

const PORT = 3001;

export default async function main() {
    console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
    try{
        const app = createApp();
        app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}