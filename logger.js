function logInfo(msg) {
  console.log("\x1b[32m%s\x1b[0m", "[INFO]", msg);
}

function logError(msg) {
  console.error("\x1b[31m%s\x1b[0m", "[ERROR]", msg);
}

module.exports = { logInfo, logError };
