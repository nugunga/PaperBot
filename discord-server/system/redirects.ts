import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
import db from "../database";

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await db.user.findUnique(id);
    return user ? done(null, user) : done(null, null);
  } catch (err) {
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
      scope: ["identify", "email", "guilds", "bot"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        const id = profile.id;
        const existingUser = await db.user.findUnique(id);

        if (existingUser) {
          console.log(`Existing User: ${existingUser.id}`);
          await db.user.update(id, accessToken, refreshToken);
          return done(null, existingUser);
        }

        const newUser = await db.user.create(id, accessToken, refreshToken);
        return done(null, newUser);
      } catch (err) {
        console.log(err);
        return done(err as any, undefined);
      }
    }
  )
);
