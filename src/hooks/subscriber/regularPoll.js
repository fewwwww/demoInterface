import {useEffect, useState} from "react";

const useRegularPoll = () => {

    const [data, setData] = useState({
        blocknum: "",
        blockhash: "",
        zkproof: "",
        price: "",
        contract: "",
        decimals: "",
    })


    const subscribe = async () =>{
        let response = await fetch("http://54.248.170.145/getcurrentprice");
        if (response.status === 502) {
            // await subscribe();
        } else if (response.status !== 200) {
            await new Promise(resolve => setTimeout(resolve, 12000));
            await subscribe();
        } else {
            let message = await response.json();
            console.log(message);
            setData({
                blocknum: message.blocknum,
                blockhash: message.blockhash,
                zkproof: message.zkproof,
                price: message.graphdata["price_weth-uni"],
                contract: message.graphdata.contract,
                decimals: message.graphdata.decimals,
            })
            await new Promise(resolve => setTimeout(resolve, 12000));
            await subscribe();
        }
    }

    useEffect(()=>{
        subscribe();
    }, [])

    return {
        getPolledData: data
    }
}

export default useRegularPoll;