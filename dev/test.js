const Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1663750747660,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1663750749631,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1663750759576,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "d576f7d63b9f4e17a5ec59349f46356a",
    "transactionId": "3d68d473c01a4ff8ac7a7cdb8ee84e25"
    }
    ],
    "nonce": 4159,
    "hash": "0000d027fa1130bf212a66fbbc9980d6b7ae4cb9b4f542e7c24952bfa7ff9464",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "d576f7d63b9f4e17a5ec59349f46356a",
    "transactionId": "37f47d013d054b43ac0391ff81c7f9f6"
    },
    {
    "amount": 10,
    "sender": "BJKKBKKJ4654683535",
    "recipient": "5654JNKJBJVH5466",
    "transactionId": "e5ef95e51e924d22a88f28b76ab86d0c"
    },
    {
    "amount": 11,
    "sender": "BJKKBKKJ4654683535",
    "recipient": "5654JNKJBJVH5466",
    "transactionId": "de509bf4a429449c99b1a48e2a97a347"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };


    console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));