import { PrismaClient } from "@prisma/client";
import user from "./query/user";

export const prisma = new PrismaClient();

async function connect() { await prisma.$connect() }
async function disconnect() { await prisma.$disconnect(); }

export default {
    connect,
    disconnect,
    user,
};