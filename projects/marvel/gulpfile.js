var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

const srcGlob = ['./app/**/*.html'];

const generateTemplateCache = () => gulp
  .src(srcGlob)
  .pipe(plug.htmlmin({collapseWhitespace: true}))
  .pipe(plug.angularTemplatecache('templates.ts', {
    module: 'ngaApp.core',
    standalone: false,
    root: 'app/'
  }))
  .pipe(gulp.dest('./app/'));

gulp.task('templatecache:watch', () => plug
  .watch(
    srcGlob,
    { ignoreInitial: false },
    () => generateTemplateCache()
  )
);

gulp.task('templatecache:build', () => generateTemplateCache());
