const gulp = require("gulp");
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const buildDirectory = './build'
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

gulp.task('connect', (done) => {
    connect.server({
        root: 'build',
        livereload: true
    });
    return done()
});

gulp.task('pug', () => {
    return gulp.src('pug/*')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(`${buildDirectory}/`))
        .pipe(connect.reload());
});

gulp.task('stylus', () => {
    return gulp.src('stylus/*')
        .pipe(stylus())
        .pipe(gulp.dest(`${buildDirectory}/css/`))
        .pipe(connect.reload());
});

gulp.task('img', () => {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(`${buildDirectory}/img/`))
        .pipe(connect.reload());
});

gulp.task("watch", (done) => {
    gulp.watch(['./pug/*.pug'], gulp.task('pug'));
    gulp.watch(['./stylus/*.styl'], gulp.task('stylus'));
    gulp.watch(['./img/*'], gulp.task('img'));
    return done();
});

gulp.task('default', gulp.series(gulp.parallel(['pug', 'stylus', 'img', 'connect', 'watch'])),(done)=> {
    done();
});