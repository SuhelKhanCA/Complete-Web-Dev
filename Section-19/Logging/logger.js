const fs = require("fs");

const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("Message", { message });
  }
}

const logger = new Logger();

const logFile = "./event.log";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  fs.appendSync(logFile, logMessage);
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = Math.floor((os.freemem() / os.totalmem()) * 100);
  logger.log(`Current memory usage : ${memoryUsage}`);
}, 3000);

logger.log("Application Started");
logger.log("Application event occured");
