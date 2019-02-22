// commonJS 模块化的规范
// 一个js文件当成一个模块
// 一个js文件，会形成一个自己的私有作用域
const demo = require('./demo');
var a = '什么鬼';
const gulp = require('gulp');
// 默认从node_modules文件夹进行寻找,找到对应文件夹的index.js
minifyHtml = require("gulp-minify-html");
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
// 文件名称变为hash值
const rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
// gulp开启服务器
const connect = require('gulp-connect');
 
// 开启服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 8888,
        // 热更新
        livereload: true
    });
});
gulp.task('default', ['connect', 'watch', 'all']);

// 创建一个任务， 任务名称: minicss
gulp.task('minicss', function () {
    // 将你的默认的任务代码放在这
    gulp.src('app/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
    // 生成一个json文件,记录hash值
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/'))
    console.log('压缩css');
});
gulp.task('minijs', function () {
    // 将你的默认的任务代码放在这
    gulp.src('app/js/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // es6转成es5以后, 在压缩
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    console.log('压缩js');
});

 

 
gulp.task('minify-html', function () {
    gulp.src('html/*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('dist/html'));
});

// 监听html, 如果发生改变就重新压缩
gulp.task('watch', function() {
    gulp.watch('app/*.html', ['minify-html']);
    gulp.watch('app/**/*.css', ['minicss']);

})

// 一个命令完成多个任务
//这些任务会在你当前任务运行之前完成。
gulp.task('all', ['minicss', 'minify-html', 'minijs'], function() {
    console.log('任务执行完成');
});