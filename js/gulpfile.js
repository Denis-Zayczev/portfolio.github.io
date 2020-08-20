const gulp = require('gulp');
const server = require('browser-sync').create();

gulp.task('server', function () {
  server.init({
    server: '',
    notify: false,
    open: false
    // tunnel: true,
    // tunnel: 'ik-demonstration'
  });

  gulp.watch('index.html', gulp.series('reload'));
  gulp.watch('css/style.css', gulp.series('reload'));
  gulp.watch('js/*.js', gulp.series('reload'));
});

gulp.task('reload', function (done) {
  server.reload();
  done();
});

// dev
gulp.task(
  'dev',
  gulp.series('server')
);
