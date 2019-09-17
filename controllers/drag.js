const fs = require('fs');
const Pug = require('pug');


const source = './views/story-content.pug';
const template = Pug.compileFile(source);

exports.drag = (req, res, next) => {
  /**
   *  data needs to be stringified via JSON as fs.writeFile()
   *  writeFile() expects a sting as second param.
   *  https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback
   *  https://stackoverflow.com/questions/21976567/write-objects-into-file-with-node-js
   */
  const stringified = JSON.stringify(req.body);

  fs.writeFile('./data/data.json', stringified, 'utf8', (err) => {
    if (err) {
      console.log('error writing media data to json file, drag.js', err);
    }
  });

  /**
   *  parse JSON string and pass to pug template.
   *
   */
  const ampHtml = template(JSON.parse(stringified));

  fs.writeFile('./views/amp-story.html', ampHtml, (err) => {
    if (err) {
      console.log('error writing story.html file', err)
    } else {
      console.log('success writing story.html')
      res.download('./views/amp-story.html', (err) => {
        if(err) {
          console.log(err);
        }
      })
    }
  });

};