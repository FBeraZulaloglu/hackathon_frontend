import React, {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import SimpleStore_abi from '../data/SimpleScore_abi.json'


const SimpleStore = (() => {

    const contractAdress = '0x1ddb4c2558237dFd661F9ff79F358862FdBd612f'

    const [connbButtonText,setConnectButtonText] = useState("Cüzdana bağlan")
    const [errorMessage,setErrorMessage] = useState(null)
    const [defaultAccount,setDefaultAccount] = useState(null)

    const [currentContractVal, setCurrentContractVal] = useState(null)

    const [provider,setProvider] = useState(null)
    const [signer,setSigner] = useState(null)
    const [contract,setContract] = useState(null)


    const connectWalletHandler = () =>{
        if (window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result=>{
                accountChangedHandler(result[0]);
                setConnectButtonText("Cüzdana bağlandı :)")
            })
        }
        else{
            setErrorMessage('Metamask indirilmesi gerekiyor!')
        }
    }

    const accountChangedHandler = (newAccount) =>{
        setDefaultAccount(newAccount);
        updateEthers();
    }

    const updateEthers = async() =>{
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(tempProvider);

        let tempSigner = await tempProvider.getSigner();
        setSigner(tempSigner);

        let tempContract = new ethers.Contract(contractAdress, SimpleStore_abi, tempSigner);
        setContract(tempContract);
    }

    const getCurrentVal = async() =>{
        let val = await contract.get();
        setCurrentContractVal(val)
    }

    const setHandler = (event) => {
        event.preventDefault(); // We do not want to all page to reload
        
        contract.set(event.target.setText.value);
    }

    return (
        <div>
            <h3>Contract bağlamında işlem yap!</h3>
            <button onClick={connectWalletHandler}>{connbButtonText}</button>
            <h3>Metamask adresi: {defaultAccount}</h3>

            <form onSubmit={setHandler}>
                <input id='setText' type='text'></input>
                <button type="submit">Kontraktı güncelle</button>                                                                                                                                                                                                                                       
            </form>
            
            <button onClick={getCurrentVal}>Kontrat bilgileri:{currentContractVal}</button>
            {errorMessage}
        </div>
    )
})

export default SimpleStore