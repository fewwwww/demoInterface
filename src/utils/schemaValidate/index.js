
const obj = {
    "data":{
        "blocknum":15930555,
        "blockhash":"0xf766a496f4bc90b3cb9a1e891bf598e5dbd0474b7666a209599c87baaa6f84ed",
        "graphdata":{
            "price":215.676,
            "contract":"UniswapV2(UNI-WETH)",
            "decimals":3,
        },
        "zkproof":"0x098ad46d8c6ddbf18a2db1ffa1f0c2b2f493cf438d645627309b16fe4933451c",
    }
}

const validateInput = (input) => {
    const compiledInput = JSON.parse(schema.replace(/\s+/g, ''))

    // check data obj
    if(!compiledInput.data) return "[Data object] is needed.";
    if(!compiledInput.data.blocknum) return "[blocknum] is needed.";
    if(!compiledInput.data.blockhash) return "[blockhash] is needed.";
    if(!compiledInput.data.graphdata) return "[graphdata object] is needed.";
    if(!compiledInput.data.graphdata.price) return "[price] is needed.";
    if(!compiledInput.data.zkproof) return "[zkproof] is needed.";

}
