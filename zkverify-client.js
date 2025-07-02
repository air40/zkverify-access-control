const axios = require('axios');

async function verifyProof(proof) {
  const apiKey = process.env.ZKVERIFY_API_KEY;
  const apiUrl = process.env.ZKVERIFY_API_URL;

  if (!apiKey || !apiUrl) {
    throw new Error("Missing API key or URL in environment variables.");
  }

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };

  const response = await axios.post(apiUrl + "/verify", proof, { headers });
  return response.data;
}

module.exports = { verifyProof };
