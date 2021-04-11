/**
 * @file run server
 * @author Bongwon Suh<suhliebe@gmail.com>
 */
import path from 'path';
import express from 'express';
import common from './lib/common';
import * as njk from 'nunjucks'
import router from './routers/router';

const app = express();

// template engine
njk.configure(path.join(common.projectDir, 'static', 'template'), {
    "autoescape": true,
    "watch": true,
    "express": app
}).addGlobal('static', "/static");

// router
app.use(router);

app.get('/', (req, res) => {
    res.render('index.njk');
})

app.listen(3000, ()=>{
    console.log("server start");
})