const Web3 = require("web3");
require('dotenv').config(); 

// Web3 initialization (should point to the JSON-RPC endpoint)
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8590"));


// Replace with your actual private key and password
const privateKey = process.env.METAMASK_PRIVATE_KEY;
const password =  process.env.PASSWORD; 

var V3KeyStore = web3.eth.accounts.encrypt(privateKey, password);
console.log(JSON.stringify(V3KeyStore));
process.exit();