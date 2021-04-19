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

app.use('/static/css', express.static(path.join(common.projectDir, 'static', 'css')));
app.use('/static/js', express.static(path.join(common.projectDir, 'static', 'js')));
app.use('/static/assets', express.static(path.join(common.projectDir, 'static', 'assets')));

// router
app.use(router);

app.get('/*', (req, res) => {
    res.render('index.njk')
})

app.listen(3000, ()=>{
    console.log("server start");
})