

//3rd party dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/route.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');
const logger = require('./middleware/logger.js');
//custom routes
// application constant
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('./public'));
app.use(apiRouter);
app.use(error404);
app.use(error500);
app.use(logger);

module.exports = {
  server:app,
  start:port=>{
    let PORT = port || process.env.port || 3000;
    app.listen(PORT,()=>console.log(`listen on ${PORT}`));
  },
};