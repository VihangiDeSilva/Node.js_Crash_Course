const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listner' ,data));

logger.log('Hello World');
logger.log('Hello World2');
logger.log('Hello World3');