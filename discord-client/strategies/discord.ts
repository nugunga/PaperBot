import passport, { Profile } from "passport";
import { Strategy } from "passport-discord";
import { VerifyCallback } from 'passport-oauth2'

passport.serializeUser((user: any, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id:string, done) => {
    
});


passport.use(
    new Strategy(
    {
        clientID: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        callbackURL: process.env.DISCORD_CALLBACK_URL,
        scope: ['identify', 'email', 'guilds', 'applications.commands'],
    }, 
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
        console.log(accessToken, refreshToken);
        console.log(profile)
    })
);