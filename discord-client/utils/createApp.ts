import express, { Express } from "express"
import cors from 'cors';
import session from 'express-session'
import routes from "../routes/router";

export function createApp(): Express{
    const app = express();

    //Enable Parsing Middleware for Requests
    app.use(express.json());
    app.use(express.urlencoded());
    
    //Enable CORS
    app.use(
        cors({
            origin: ["http://localhost:3001"],
            credentials: true 
        })
    )

    app.use(
        session({
            secret: "ASJDNKNASLNDSAJNASKJDKASHDKJhKASNLDNASND",
            resave: false,
            saveUninitialized: false,
            cookie:{ maxAge: 60000 * 60 * 24 * 7 }
    }))

    app.use('/api', routes);

    return app;
}