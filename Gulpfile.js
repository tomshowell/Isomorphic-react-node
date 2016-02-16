const gulp = require('gulp'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream');


gulp.task('transform_js', function() {

  return browserify({entries: 'components/News_Client.jsx', extensions: ['.jsx'], debug: true})        
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('newsClients.js'))
        .pipe(gulp.dest('public/'));
    
});

gulp.task('default', ['transform_js']);
