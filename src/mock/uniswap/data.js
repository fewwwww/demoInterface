import uniswapLogo from "../../assets/logos/uniswap.jpeg";
const data = {
    basic: {
        logo: uniswapLogo,
        name: "Uniswap V2",
        version: "v0.0.2",
        address: "0xF87ab180aF2C3DdeaFedE31e27d447CE79E0549a",
        indexed_network: "Mainnet",
        queryUrl: "subgraphs/id/2szAn45skWZFLPUbxFEtjiEzT1FMW8Ff5ReUPbZbQxtt",
        subgraphId: "2szAn45skWZFLPUbxFEtjiEzT1FMW8Ff5ReUPbZbQxtt",
    },
    overview: {
        intro: "A fully decentralized protocol for automated liquidity provision on Ethereum.",
        website: "uniswap.org",
        github: "Uniswap/uniswap-v2-subgraph",
        deploymentId: "QmdoQo45eEeqc9z9j71DxEGFDrUTaTqtvmjTLZcXgDfwtr",
        tokenId: "12628306317986574320101416183254227605133522994577220030062229648668685025461",
        created: "a year ago",
        lastUpdated: "7 months ago",
    }
}


const uniswap = () =>{
    return data;
}

export default uniswap;
