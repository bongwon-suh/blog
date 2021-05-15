/**
 * @file run server
 * @author Bongwon Suh<suhliebe@gmail.com>
 */
import path from 'path';
import express, { query } from 'express';
import * as njk from 'nunjucks';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import common from './lib/common';
import router from './routers/router';
import { User } from './models/User';
import "reflect-metadata";
import { createConnection } from 'typeorm';

// db initailize
createConnection()
    .then(()=>{
        console.log('database connected');
    })
    .catch((err)=>{
        console.log(err);
    });

const app = express();

app.use(session({
    secret: 'keyboard cat'
}));


const passport_options: LocalStrategy.IStrategyOptions = {
    usernameField: 'user_id',
    passwordField: 'password',
    session: true
}

app.use(passport.initialize());
app.use(passport.session());

const local_strategy = new LocalStrategy.Strategy(passport_options, async (user_id, password, cb)=>{
    console.log(user_id, password)
    await User.findOne({user_id: user_id})
    .then((user)=>{
        console.log(user)
        return cb(null, user)
    })
    .catch()
});

passport.use(local_strategy);

passport.serializeUser( (user, cb)=>{
    cb(null, user);
});

passport.deserializeUser( (user: User, cb)=>{
    cb(null, user);
});


// template engine
njk.configure(path.join(common.projectDir, 'static', 'template'), {
    "autoescape": true,
    "watch": true,
    "express": app
}).addGlobal('static', "/static");

app.use('/static/css', express.static(path.join(common.projectDir, 'static', 'css')));
app.use('/static/js', express.static(path.join(common.projectDir, 'static', 'js')));
app.use('/static/assets', express.static(path.join(common.projectDir, 'static', 'assets')));
app.use('/static/images', express.static(path.join(common.projectDir, 'static', 'images')));

// router
app.use(router);

app.get('/*', (req, res) => {
    res.render('index.njk')
})

app.listen(3000, ()=>{
    console.log("server start");
})