import * as React from 'react';
import {Button, LinearProgress, TextField} from "@mui/material";
import {useState} from "react";
import {ethers} from "ethers";
import abi from "../../../utils/zk/zkabi.json";
import {uint2hexbytes32} from "../../../utils/priceToByte";
import Box from "@mui/material/Box";

const DEPLOYED_CONTRACT_ADDRESS = "0xA304A4DfFB62681d67EDECe178ee067658a412a6";
const ValidationSection = () =>{


    const [price, setPrice] = useState(0);
    const [priceDecimals, setPriceDecimals] = useState(0)
    const [blocknum, setBlocknum] = useState("");
    const [zkproof, setZkproof] = useState("");
    const [verifiedResult, setVerifiedResult] = useState({status: "UNSENT"})
    const contractConnector = () =>{
        let provider = ethers.getDefaultProvider("https://eth-sepolia.unifra.io/v1/d52e8bdf1dd14499ad09767522a6d43b");
        return new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
    }

    const handleValidate = async (e) =>{
        e.preventDefault();
        console.log(price, priceDecimals, blocknum, zkproof);
        const myTimeout = setTimeout(()=>{
            if(verifiedResult.status !== true){
                setVerifiedResult({status: false})
            }
            console.log("timeout")
        }, 5000);
        setVerifiedResult({status: "PENDING"})
        const getP = () => {
            let p = price;
            let decimals = priceDecimals;
            while( decimals > 0){
                p *= 10;
                decimals --;
            }
            return parseInt(p);
        }
        const priceByte = uint2hexbytes32(getP());
        const contract = contractConnector();
        console.log(`price: ${priceByte}, blocknum: ${blocknum}, zkproof: ${zkproof}`)
        const zkVerify = await contract.zkverify_with_blocknumber(blocknum, priceByte, zkproof);
        console.log(zkVerify)

        if(zkVerify){
            setVerifiedResult({status: true});
            clearTimeout(myTimeout);
        }else setVerifiedResult({status: false})
    }

    const VerifyIcon = () => {
        if(verifiedResult.status === true) return <Button onClick={handleValidate} style={{margin: "5px", width: "100px", height: "55px", background: "#1b4813", color: "white"}} variant="outlined">Verified!</Button>
        else if(verifiedResult.status === false) return <Button onClick={handleValidate} style={{margin: "5px", width: "100px", height: "55px", background: "#FFAEBC", color: "white"}} variant="outlined">Retry!</Button>
        else return <Button onClick={handleValidate} style={{margin: "5px", width: "100px", height: "55px"}} variant="outlined">Validate</Button>
    }

    return <>
        {verifiedResult.status === "PENDING" &&  <Box sx={{ width: '100%' , marginBottom: "15px"}}>
            <LinearProgress />
        </Box>}
        <TextField value={price} onChange={(e)=>{setPrice(e.target.value), setVerifiedResult({status: "UNSENT"})}} type="number" style={{margin: "5px"}} id="outlined-basic" label="Price" variant="outlined"/>
        <TextField value={priceDecimals} onChange={(e)=>{setPriceDecimals(e.target.value), setVerifiedResult({status: "UNSENT"})}} type="number" style={{margin: "5px"}} id="outlined-basic" label="Decimals" variant="outlined" />
        <TextField value={blocknum} onChange={(e)=>{setBlocknum(e.target.value), setVerifiedResult({status: "UNSENT"})}} style={{margin: "5px"}} type="number" id="outlined-basic" label="Block Number" variant="outlined" />
        <TextField value={zkproof} onChange={(e)=>{setZkproof(e.target.value), setVerifiedResult({status: "UNSENT"})}}  style={{margin: "5px"}} id="outlined-basic" label="ZkProof" variant="outlined" />
        {/*<Button onClick={handleValidate} style={{margin: "5px", width: "100px", height: "55px"}} variant="outlined">Validate</Button>*/}
        <VerifyIcon/>
    </>
}

export default ValidationSection;