import { configDotenv } from "dotenv";

configDotenv()

export const server_port = process.env.SERVER_PORT;
export const jwt_secret = process.env.JWT_SECRET;
