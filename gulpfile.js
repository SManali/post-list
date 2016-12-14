var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    handlebars = require('gulp-handlebars'),
    defineModule = require('gulp-define-module'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    cache = require('gulp-cached'),
    debug = require('gulp-debug'),
    gulpif = require('gulp-if'),
    isDebug = false,
    srcFolderPath = '**',
    replace = require("gulp-replace");


/*default gulp command*/
gulp.task('default', ['build']);
gulp.task('build', ['stylusTasks', 'handlebarsTasks']);


/*Add different command to watch files*/
gulp.task('watch', function() {
    gulp.watch(srcFolderPath + '/**/*.styl', ['stylusTasks']);
    gulp.watch(srcFolderPath + '/**/*.{handlebars,hbs}', ['handlebarsTasks']);
});

/* task for stylus Start*/
gulp.task("stylusTasks", ["stylusCompiler"]);

//compile stylus
gulp.task('stylusCompiler', function() {
    gulp.src(['**/*.styl', "!**/node_modules/**/*.styl", "!**/vendor/**/*.styl"])
        .pipe(gulpif(isDebug, debug({
            "title": "styles files"
        })))
        .pipe(cache('stylusCompile').on('error', gutil.log))
        .pipe(stylus())
        .pipe(gulp.dest("."));
});
/* task for stylus End*/


//Require js
gulp.task('handlebarsTasks', function() {
    return gulp.src(['**/*.{handlebars,hbs}', "!**/node_modules/**/*.{handlebars,hbs}", "!**/vendor/**/*.{handlebars,hbs}", "!**/frontend-components/manager/**/*.{handlebars,hbs}", "!**/frontend-components/math-editor/**/*.{handlebars,hbs}", "!**/frontend-components/equation-editor/**/*.{handlebars,hbs}"])
        .pipe(gulpif(isDebug, debug({
            "title": "handlebars files"
        })))
        .pipe(cache('handlebarsCompile'))
        .pipe(handlebars({
            // The runtime you include on the client side MUST match the version you compile templates with.
            // Pass your local handlebars version
            "handlebars": require('handlebars')
        }).on('error', gutil.log))
        .pipe(defineModule('amd'))
        .pipe(gulp.dest("."));
});

/*task for handlebars end*/
