var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'SSxDFZ6CZGv3KKwVVfrhyGyBXddNM164',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('images'));
        done();
});