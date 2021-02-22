const { src, dest } = require("gulp");
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const del = require("del");
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const groupMedia = require("gulp-group-css-media-queries");
const clean_css = require("gulp-clean-css");
const rename = require("gulp-rename");
const modifyCssUrls = require("gulp-modify-css-urls");
const projectFolder = "dist";
const sourceFolder = "src";
const path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/css/",
    img: projectFolder + "/images/",
  },
  src: {
    html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
    css: sourceFolder + "/scss/main.scss",
    img: sourceFolder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  watch: {
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/scss/**/*.scss",
    img: sourceFolder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + projectFolder + "/",
};

function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./" + projectFolder + "/",
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(scss({ outputStyle: "expanded" }))
    .pipe(groupMedia())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions", "ie >= 11"],
        cascade: true,
      })
    )
    .pipe(
      modifyCssUrls({
        modify: function (url, filePath) {
          return "/" + url;
        },
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.img], images);
}

function clean() {
  return del(path.clean);
}

const build = gulp.series(clean, gulp.parallel(css, html, images));
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.clean = clean;
exports.html = html;
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;
