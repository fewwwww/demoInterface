const ethers = require("ethers");
const abi = require("./utils/zk/autoabi.json");

// let options = {
//     timeout: 10000,
//
//     clientConfig:
//         {
//             keepalive: true,
//             keepaliveInterval: 20000
//         },
//
//     reconnect: {
//         auto: true,
//         delay: 10000,
//         maxAttempts: 3,
//         onTimeout: false
//     }
// };

const watchEvent = () =>{
    // let provider = new ethers.providers.WebSocketProvider("wss://eth-sepolia.unifra.io/ws/d52e8bdf1dd14499ad09767522a6d43b");
    let provider = new ethers.providers.JsonRpcProvider("https://rpc.sepolia.org");
    let contractAddress = "0xf8dC0eD19d7cA7796E02aC9132bcC090b037de77";
    let contract = new ethers.Contract(contractAddress, abi, provider);

    contract.on("Auto", (srcBlockNum, target, payload, isTriggered, event) => {
        console.log("======================")
        console.log(srcBlockNum.toString());

    });
}



watchEvent();