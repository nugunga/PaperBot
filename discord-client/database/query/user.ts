import { User } from "@prisma/client";
import { prisma } from "..";

async function create(discordID: string, accessToken: string, refreshToken: string) : Promise<User> {
    const user = prisma.user.create({
        data:{
            discordID: discordID,
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    })
    return user;
}


async function update(discordID: string, accessToken: string, refreshToken: string) : Promise<User> {
    const user = prisma.user.update({
        where:{ discordID: discordID },
        data:{
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    })
    return user;
}

async function findUnique(discordID:string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where:{
            discordID: discordID
        }
    });

    return user;
}

export default { create, update, findUnique }