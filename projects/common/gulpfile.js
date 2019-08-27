var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

const srcGlob = ['./**/*.html'];

const generateTemplateCache = () => gulp
  .src(srcGlob)
  .pipe(plug.htmlmin({collapseWhitespace: true}))
  .pipe(plug.angularTemplatecache('templates.ts', {
    module: 'common',
    standalone: false,
    root: 'common/'
  }))
  .pipe(gulp.dest('./'));

gulp.task('templatecache:watch', () => plug
  .watch(
    srcGlob,
    { ignoreInitial: false },
    () => generateTemplateCache()
  )
);

gulp.task('templatecache:build', () => generateTemplateCache());
