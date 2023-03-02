const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");

const env = process.env.NODE_ENV || "development";
const logDir = "log";

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "Login.log");

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === "development" ? "debug" : "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.json()
  ),
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new transports.File({ filename })
  ]
});
module.exports = logger;



handleFormSubmit(event, logger) {
    event.preventDefault();
    logger = require("./Logger");
    try {
      logger.info("info");
      const { history } = this.props;
      if (this.state.email === "Test" && this.state.password === "Test") {
        history.push("/Dashboard");
      }
    } catch (e) {
      alert(e.message);
    }
  }