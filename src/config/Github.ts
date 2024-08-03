import passport from "passport";
import GitHub from "passport-github2";
import { environmentVariable } from "../env/environment";


const GitHubStrategy = GitHub.Strategy;

passport.use(
    new GitHubStrategy(
        {
            clientID: environmentVariable.client_id,
            clientSecret: environmentVariable.clientSecret,
            callbackURL: environmentVariable.callbackUrl2,
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile)
        }
    )
);

passport.serializeUser((user,done) =>{
    return done(null, user);
});

passport.deserializeUser((user:any,done) =>{
    return done(null, user)
})