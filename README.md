## node version
 v18.20.4

## How to generate key file for ether-singer

## 1. Install node
```shell
$ npm i
```
## 2. Prepare
```shell
$ touch .env 
insert  these data
METAMASK_PRIVATE_KEY=<your metamask private key>
PASSWORD=<passwordFile in ether-signer image>
```

## 3. Generate key file
```shell
$ npm start
```


## How to encode function in smart contract


## 1. Install node
```shell
$ npm i
```

## 2. Prepare data
```shell
$ insert  these data
FROM_CONTRACT_ADDRESS=<your contract address>
TO_CONTRACT_ADDRESS=<to contract address>
AMOUNT_IN_WEI=<amount in wei>
```

## 3. Run encode
```shell
$ npm run encode
```