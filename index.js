require('dotenv').config();
const { verifyProof } = require('./lib/zkverify-client');
const { logInfo, logError } = require('./lib/logger');
const dummyProof = require('./lib/proof-object');

async function main() {
  logInfo("🔐 Starting zkVerify Access Control Demo...");

  try {
    const result = await verifyProof(dummyProof);
    if (result.success) {
      logInfo("✅ Proof verified successfully!");
      logInfo("🎉 Access granted to secret content: The zk Treasure Map 🗺️");
    } else {
      logError("❌ Proof verification failed. Access denied.");
    }
  } catch (err) {
    logError("Error during verification: " + err.message);
  }
}

main();
