import logger from "./fancy-logger.js";

export default function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First file");
  logger.printLogCount();
}
