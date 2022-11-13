import React, {useState,useEffect} from 'react'
import {ethers} from 'ethers'

import competence_abi from '../data/competence_abi.json'
import main_abi from '../data/main_abi.json'
import sub_abi from '../data/sub_abi.json'

import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'

import avatar from '../data/metamask.png'


function Navbar() {

  // METAMASK

  const ekapb_competence = '0x67cD43559078521314Cebf9f9f049b4B9E1fB871'

  const ekapb_main = '0x06F945BD37c8eBf5D98E374Af63BeF3B981FB997'

  const [connbButtonText,setConnectButtonText] = useState("Cüzdana bağlan")
  const [errorMessage,setErrorMessage] = useState(null)
  const [defaultAccount,setDefaultAccount] = useState(null)

  const [currentContractVal, setCurrentContractVal] = useState(null)

  const [provider,setProvider] = useState(null)
  const [signer,setSigner] = useState(null)
  const [contract,setContract] = useState(null)


  const hackathon = {
    chainId: '0xA868',
    chainName: 'hackathon_chain',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://176.236.121.139:9656/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://explorer.digiathon.com/']
  }

  // Doğru chaindemi kontrolü yapılır.
  const isChain = (chainId) => (
    chainId &&
    chainId.toLowerCase() === hackathon.chainId.toLowerCase()
  )

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

      let tempContract = new ethers.Contract(ekapb_competence, competence_abi, tempSigner);
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
  

  const {activeMenu,setActiveMenu,screenSize,setScreenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize',handleResize)
  }, [])
  

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  }, [screenSize])

  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  window.ethereum.on('chainChanged', () => window.location.reload());
  window.ethereum.on('accountsChanged', () => window.location.reload());

  const NavButton = ({title,customFunc,icon,color,dotColor}) => (
    <TooltipComponent content={title}
                      position="BottomCenter">
      <button type='button'
              onClick = {customFunc}
              style={{color}}
              className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      
      <span style={{backgroun:dotColor}} 
            className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>           
      </span>
      {icon} 
      </button>
    </TooltipComponent>

)

  return (
  
      <div className='flex justify-between p-2 md:mx-6 relative '>
        <NavButton title="Menu" 
                    color='black' 
                    icon = {<AiOutlineMenu/>}
                    customFunc = {handleActiveMenu}/>

      <div className="flex">
        
        <TooltipComponent 
          content='Profile'
          position='BottomCenter'>
              <div className='flex items-center gap-2 cursor-pointer p-1 hoer:bg-light-gray rounded-lg'
                  onClick={connectWalletHandler}
                    >
                  
                  <img className="rounded-full w-8 h-8 " src={avatar} alt='user-profile'/>
                  
                  <p >
                    {/* <span className="text-gray-400 text-14">Hoşgeldin, </span> */}
                    {' '}
                    <span className='text-gray-400 font-bold ml-1 text-14'>{defaultAccount}</span>
                  </p>

                  <p style={isChain(window.ethereum.chainId) ? { display: "none" } : {}}
                  >Doğru ağa bağlanamadınız. Lütfen {hackathon.chainName} bağlanınız.</p>

                  <MdKeyboardArrowDown className='text-gray-400 text-14'/>
              </div>
        </TooltipComponent>
        
      </div>
    </div>
  )
}

export default Navbar
