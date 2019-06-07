const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8000;

app.use(morgan('dev'));
app.use('/', express.static('projects/learner/temp'));

app.listen(port, () => console.log(`server running on port ${port}`));
