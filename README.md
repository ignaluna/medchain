## Getting Started

1. Run `npm install` at the root directory
2. Create a `.env.development` with this variables.
```
REACT_APP_WC_PROJECT_ID=WALLET-CONNECT-ID
GENERATE_SOURCEMAP=false
REACT_APP_GRAPHQL_GATEWAY_BASE_URL=https://gateway.staging.cedalio.io
REACT_APP_NET_SCAN_BASE=https://mumbai.polygonscan.com/address/ (or your selected network scan)
```
3. Then run: `npm start`

- Note that we are using our gateway to deploy and interact with the blockchain with graphql
