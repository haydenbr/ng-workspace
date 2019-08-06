const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8000;

app.use(morgan('dev'));

app.use('/', express.static('dist/learner', {
  etag: false,
  maxage: 0
}));
app.use('/Admin', express.static('dist/admin', {
  etag: false,
  maxage: 0
}));
app.use('/Marvel', express.static('dist/marvel', {
  etag: false,
  maxage: 0
}));

app.listen(port, () => console.log(`server running on port ${port}`));
