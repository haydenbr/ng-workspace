const express = require('express');
const proxy = require('express-request-proxy');
const app = express();
const port = 8000;

app.use('/sockjs-node/info', proxy({
  url: 'http://localhost:4200/sockjs-node/info'
}));
// http://localhost:8000/sockjs-node/212/ef3ykxab/xhr_streaming?t=1559706731290
// http://localhost:8000/sockjs-node/212/lpcu3yxa/eventsource
// http://localhost:8000/sockjs-node/212/1ik01dbw/xhr?t=1559706731989
app.use('/', express.static('projects/learner/temp'));

app.listen(port, () => console.log(`server running on port ${port}`));
