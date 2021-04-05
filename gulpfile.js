/**
 * @file build project
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");

var paths = {
    pages: ["src/*.html"],
};

// var watchedBrowserify = watchify(
//     browserify({
//         basedir: ".",
//         debug: true,
//         entries: ["src/main.ts"],
//         cache: {},
//         packageCache: {},
//     }).plugin(tsify)
// );

gulp.task("copy-html", () => {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         .on("error", fancy_log)
//         .pipe(source("bundle.js"))
//         .pipe(gulp.dest("dist"));
// }
// gulp.task("default", gulp.series(gulp.parallel("copy-html"), bundle));
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", fancy_log);

// gulp.task(
//     "default",
//     gulp.series(gulp.parallel("copy-html"), ()=>{
//         return browserify({
//             basedir: ".",
//             debug: true,
//             entries: ["src/main.ts"],
//             cache: {},
//             packageCache: {},
//         })
//             .plugin(tsify)
//             .bundle()
//             .pipe(source("bundle.js"))
//             .pipe(buffer())
//             .pipe(sourcemaps.init({ loadMaps: true }))
//             .pipe(uglify())
//             .pipe(sourcemaps.write("./"))
//             .pipe(gulp.dest("dist"));
//     })
// );

gulp.task(
    "default",
    gulp.series(gulp.parallel("copy-html"), ()=>{
        return browserify({
            basedir: ".",
            debug: true,
            entries: ["src/main.ts"],
            cache: {},
            packageCache: {},
        })
            .plugin(tsify)
            .transform("babelify", {
                presets: ["es2015"],
                extensions: [".ts"],
            })
            .bundle()
            .pipe(source("bundle.js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest("dist"));
    })
);
