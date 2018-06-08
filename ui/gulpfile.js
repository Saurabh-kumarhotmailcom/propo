var gulp = require('gulp');
var browserSync = require('browser-sync').create();
//for publishing to aws
var awspublish = require('gulp-awspublish');

gulp.task('serve', function () {

    browserSync.init({
        server: "./src"
    });

    //gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Publish to AWS S3
gulp.task('publish', function () {
    var publisher = awspublish.create({
        region: 'us-west-2',
        params: {
            Bucket: 'scrum-metrics-cal'
        }
    });
    var headers = {
        'Cache-Control': 'max-age=315360000, no-transform, public'
    };
    return gulp.src('src/**')
        .pipe(awspublish.gzip())
        .pipe(publisher.publish(headers))
        .pipe(publisher.cache())
        .pipe(awspublish.reporter());
});