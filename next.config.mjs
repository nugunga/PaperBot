// import {createApp} from "./discord-server/system/createApp";

/** @type {import('next').NextConfig} */
const nextConfig = async (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
  }

  console.log("Running on Port 3001", phase);
  // const app = createApp();
  // app.listen(3001, () => console.log(`Running on Port ${3001}`));


  return config;
};

export default nextConfig;
