
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


gulp.task('style', function () {
    return gulp.src('style.css')  
        .pipe(postcss([autoprefixer()])) 
        .pipe(gulp.dest('dist/styles')); 
});

gulp.task('default', gulp.series('style'));
