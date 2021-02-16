const server = require('./config/server');
require('./config/databaseConnect');
require('./config/routes')(server);