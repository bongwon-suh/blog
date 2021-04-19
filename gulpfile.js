/**
 * @file build project
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

const path = require('path');
const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const browserify = require('browserify');
const glob = require('glob');
const Watchify = require('watchify');
const tsify = require('tsify');
const babelify = require('babelify');
const vinyl = require('vinyl-source-stream');

const projectDir = __dirname;
const serverDir = path.join(projectDir, 'src', 'server');
const clientDir = path.join(projectDir, 'src', 'client');

const clientConfig = {
    "baseDir": clientDir,
    "files": glob.sync(path.join(clientDir, "ts/**/*.ts")),
    "targets": {},
    "static_js": path.join(projectDir, "static", "js"),
}

function sassWatch() {
    return gulp.watch(['src/client/sass/**/*.sass'], ()=>{
        const sass_files = path.join(clientDir, "sass", "**/*.sass")
        const dest = path.join(projectDir, "static", "css")

        return gulp.src([sass_files])
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(concat('all.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest));
    })
        .on('change', (path)=>{
            console.log(path);
        });
}

function clientWatch() {
    const option = {
        "baseDir": clientConfig.baseDir,
        "paths": [path.join(clientConfig.baseDir)],
        "debug": true,
        "entries": []
    }
    const bro = browserify(clientConfig.files, option)

    bro.plugin(Watchify, { "delay": 100, "ignoreWatch": ['**/node_modules/**']});
    bro.plugin(tsify, { "target": 'es6'});
    bro.transform(babelify, {
        "presets": [
            ["@babel/preset-env", { targets: { chrome: "55" }}]
        ],
        "extensions": ['.js', '.ts'],
        "global": true
    });
    bro.on('update', clientWatchBuild);
    
    function clientWatchBuild() {
        return bro
            .bundle()
            .on('error', (err)=>{console.log(err)})
            .pipe(vinyl('all.js'))
            .pipe(gulp.dest(clientConfig.static_js))
    }
    return clientWatchBuild();
}

exports.sassWatch = gulp.series(sassWatch);
exports.clientWatch = gulp.parallel(clientWatch, sassWatch);