import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import codemirrorTheme from "../../../../theme/codemirrorTheme";
import GavelIcon from '@mui/icons-material/Gavel';
import {uint2hexbytes32} from "../../../../utils/priceToByte";
import {ethers} from "ethers";
import abi from "../../../../utils/zk/zkabi.json";
import {useEffect, useState} from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import {schemaValues, validateInput} from "../../../../utils/schemaValidate";
import Typography from "@mui/material/Typography";

const DEPLOYED_CONTRACT_ADDRESS = "0xe7651cd1d7C78b149f6007C59Ed59ccC42867807";

const OutputSection = ({output, setVerifiedResult, verifiedResult}) => {
    const [verifyWarning, setVerifyWarning] = useState(null);
    const [sendData, setSendData] = useState({
        blockhash: null,
        zkproof: null,
        price: null,
    })

    useEffect(()=>{
        if(Object.keys(output).length > 0){
            setSendData({
                blockhash: output?.data?.blockhash,
                zkproof: output?.data?.zkproof,
                price: output?.data?.graphdata?.priceWethUni,
            })
        }

        console.log(sendData)
    }, [output])

    const contractConnector = () =>{
        let provider = ethers.getDefaultProvider("https://eth-sepolia.unifra.io/v1/d52e8bdf1dd14499ad09767522a6d43b");
        return new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
    }

    const handleVerify = async (e) =>{
        e.preventDefault();
        const myTimeout = setTimeout(()=>{
            if(verifiedResult.status !== true){
                setVerifiedResult({status: false})
            }
            console.log("timeout")
        }, 5000);
        setVerifiedResult({status: "PENDING"})
        // const blocknum = sendData.data.blocknum;
        const zkproof = sendData.zkproof;
        const blockhash = sendData.blockhash;
        const price = () => {
            let p = sendData.price;
            let decimals =3;
            while( decimals > 0){
                p *= 10;
                decimals --;
            }
            return parseInt(p);
        }
        const priceByte = uint2hexbytes32(price());
        const contract = contractConnector();
        console.log(`price: ${priceByte}, blockhash:${blockhash} ,zkproof: ${zkproof}`)
        const zkVerify = await contract.verify(blockhash, priceByte, zkproof);
        console.log(zkVerify)

        if(zkVerify){
            setVerifiedResult({status: true});
            clearTimeout(myTimeout);
        }else setVerifiedResult({status: false})
    }

    const onChange = React.useCallback((value) => {
        console.log('value:', value);
        setVerifyWarning(null)
        setVerifiedResult({status: "UNSENT"})
        console.log("sendData: ", sendData);
        if(value){
            setVerifyWarning(validateInput(value));
            if(!verifyWarning){
                const {blockhash, zkproof, price} = schemaValues(value)
                setSendData({blockhash, zkproof, price})
            }
        }
    }, []);

    const VerifyIcon = () => {
        if(Object.keys(output).length <= 0) return <></>
        else if(verifiedResult.status === "PENDING") return  <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
        else if(verifiedResult.status === true) return <CheckCircleIcon style={{margin: "5px 5px"}}/>
        else if(verifyWarning) return<Box sx={{display: "flex", flexDirection: "row", backgroundColor: "#9b2226"}}>
            <Box>
                <GavelIcon style={{margin: "5px 5px"}}/>
            </Box>
            <Box>
                <Typography style={{margin: "5px 5px"}} variant={"h6"}>{verifyWarning ?? ""}</Typography>
            </Box>
        </Box>

        else return <GavelIcon style={{margin: "5px 5px", cursor: "pointer"}} onClick={(e)=> handleVerify(e)}/>
    }

    return(
        <>

            <VerifyIcon/>
            <CodeMirror
                value={Object.keys(output).length > 0? `{
  "data":{             
    "blocknum":${output.data.blocknum},
    "blockhash":"${output.data.blockhash}",
    "graphdata":{
        "price":${output.data.graphdata.priceWethUni},
        "contract":"${output.data.graphdata.contract}",
        "decimals":${output.data.graphdata.decimals}
    },
    "zkproof":"${output.data.zkproof}"
  }            
}
`:""}
                height="100%"
                theme={codemirrorTheme}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, foldGutter: false}}
            />
        </>
    )
}


export  default OutputSection;