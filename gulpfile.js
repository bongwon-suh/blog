/**
 * @file build project
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

const path = require('path');
const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');


const projectDir = __dirname;
const serverDir = path.join(projectDir, 'src', 'server');
const clientDir = path.join(projectDir, 'src', 'client');


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

exports.sassWatch = gulp.series(sassWatch);