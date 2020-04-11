import logger from "./fancy-logger.js";

export default function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second file");
  logger.printLogCount();
}
