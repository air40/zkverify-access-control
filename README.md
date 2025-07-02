# zkVerify Access Control Demo

This is a non-trivial Node.js demo app for the zkVerify Relayer Challenge.

## Features

- Uses a dummy zk-SNARK proof
- Sends the proof to the zkVerify API
- Verifies the result and prints an access result
- Modular code with clear structure

## How to Run

1. Create a `.env` file based on `.env.example` and add your zkVerify API key and URL.
2. Install dependencies:
   ```
   npm install axios dotenv
   ```
3. Run the app:
   ```
   node index.js
   ```

✅ If verification is successful, secret content is unlocked!
