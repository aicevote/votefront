var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var fs =require('fs');


gulp.task('ejs', function(cb) {
  var jsonFile = 'data-vote.json',
      tempFile = 'template-vote.ejs',
      data = JSON.parse(fs.readFileSync(jsonFile, 'utf8')).data;
  
  data.forEach((item) => {
    gulp.src(tempFile)
      .pipe(ejs({
          jsonData: item
      }))
      .pipe(rename(`${item.filename}` + '.html'))
      .pipe(gulp.dest('docs/'));
  });

  var jsonFile2 = 'data-result.json',
      tempFile2 = 'template-result.ejs',
      data2 = JSON.parse(fs.readFileSync(jsonFile2, 'utf8')).data;
  
  data2.forEach((item) => {
    gulp.src(tempFile2)
      .pipe(ejs({
          jsonData: item
      }))
      .pipe(rename(`${item.filename}` + '.html'))
      .pipe(gulp.dest('docs/'));
  });
  cb();
});