import React, { useEffect, useState } from 'react'
import { BowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import MainPage from './pages/MainPage';
import ActiveBids from './pages/ActiveBids';
import PassiveBids from './pages/PassiveBids';
import CompanyBids from './pages/CompanyBids';
import OfferedBids from './pages/OfferBids';

//import { useStateContext } from './contexts/ContextProvider';
import './App.css';
//import Web3 from 'web3'

function App() {
  const activeMenu = true
  //const { activeMenu } = useStateContext();
  const [account, setAccount] = useState('')

  /* const loadBlockChainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    //const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.net.getAccounts
    console.log("accounts:", accounts)
    setAccount(accounts)
  }

  useEffect(() => {
    console.log("Component mount edildi.")
    loadBlockChainData()

  }, []) */


  return (

    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                style={{ background: 'blue', borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          ) :
            (
              <div className='w-0 dark:bg-secondary-dark'>
                <Sidebar />
              </div>
            )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-min-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

              <Routes>
                {/*Dashboard*/}
                <Route path='/' element={<MainPage />} />

                {/* Pages */}
                <Route path='/activeBids' element={<ActiveBids />} />
                <Route path='/passiveBids' element={<PassiveBids />} />
                <Route path='/offeredBids' element={<OfferedBids />} />
                <Route path='/customers' element={<CompanyBids />} />

              </Routes>
              
            <div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
