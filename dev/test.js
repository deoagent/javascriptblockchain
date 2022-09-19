const Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();

const previousBlockHash = 'OSDJNSKJDFKSNDJNFD54865165DKJSLKSJKDJLK56684';
const currentBlockData = [
    {
        amount: 101,
        sender: 'SHHSHSD564132SJD',
        recipient: '4984DWSDSK54654'
    },
    {
        amount: 30,
        sender: '46454SDJFJSKFJ656',
        recipient: '56565465JEPIFDSFK'
    },
    {
        amount: 200,
        sender: 'DEDFDF65465465FDF',
        recipient: '65654DDFDF654JH'
    },
];

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 837));