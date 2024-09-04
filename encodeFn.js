require('dotenv').config(); 
const Web3 = require('web3');
const web3 = new Web3(); // Initialize web3 without a provider, as we are only using the ABI encoding features

async function generateFunctionCallData(functionName, paramTypes, params) {
    // Encode function parameters
    const encodedParams = await web3.eth.abi.encodeParameters(paramTypes, params).substr(2);
  
    // Generate function signature and calldata
    const functionSignature = await web3.eth.abi.encodeFunctionSignature(`${functionName}(${paramTypes.join(',')})`);
    const functionCallData = functionSignature + encodedParams;
  
    // Output results
    // console.log(`Function name: ${functionName}`);
    // console.log(`Function signature: ${functionSignature}`);
    // console.log(`Encoded parameters: ${encodedParams}\n`);
    console.log(`Function calldata: ${functionCallData}`);
}
	

// Select function and parameters for transferFrom
const fromContractAddress =  process.env.FROM_CONTRACT_ADDRESS
const toContractAddress =  process.env.TO_CONTRACT_ADDRESS
const amountInWei = process.env.AMOUNT_IN_WEI
const functionName = 'transferFrom';
const paramTypes = ['address', 'address', 'uint256'];
const params = [
    fromContractAddress, // Replace with actual sender address
    toContractAddress, // Replace with actual recipient address
    amountInWei // Replace with the actual amount in wei (e.g., 1 token with 18 decimals)
];



generateFunctionCallData(functionName, paramTypes, params);
