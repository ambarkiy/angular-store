
var express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors())
const DEFAUT_IMAGE = 'place-holder.png'

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage }).array('file', 10);


app.get('/', (req, res) => {
  res.send('hello people');
});

app.post('/store-images', function (req, res, next) {

  upload(req, res, function (err) {
    console.log(req.files.length);

    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log('multer.MulterError', err)
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log('unknown error occurred on upload', err)
    }
    res.end();

    // Everything went fine.
  })
})

app.get('/store-images', function (req, res, next) {
  const fs = require('fs');
  fs.readdir('./public/images', function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    const storeImageItems = []

    files.forEach(function (file) {
      console.log(file);
      if (file != DEFAUT_IMAGE)
        storeImageItems.push({ name: file })
    });

    res.send(storeImageItems);
    res.end();
  });
})

app.listen(port, () => {
  console.log('listening to the port: ' + port);
});
