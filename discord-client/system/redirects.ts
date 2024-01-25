import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from 'passport-oauth2'
import db from "../database";

passport.serializeUser((user: any, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id:string, done) => {
    console.log(id);
    try{
        const user = await db.user.findUnique(id);
        console.log(id);
        return user ? done(null, user) : done(null, null);
    }
    catch (err) {
        console.log(err);
        return done(err, null);
    }
});

passport.use(
    new Strategy(
    {
        clientID: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        callbackURL: process.env.DISCORD_CALLBACK_URL,
        scope: ['identify', 'email', 'guilds'],
    }, 
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
        try{
            const discordID = profile.id;
            const existingUser = await db.user.findUnique(discordID);
            
            if (existingUser) {
                console.log(`Existing User: ${existingUser.discordID}`);
                await db.user.update(discordID, accessToken, refreshToken);
                return done(null, existingUser);
            }

            const newUser = await db.user.create(discordID, accessToken, refreshToken);
            return done(null, newUser);
        } 
        catch (err) {
            console.log(err);
            return done(err as any, undefined);
        }
    })
);