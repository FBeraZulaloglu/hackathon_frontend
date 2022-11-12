import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import { useStateContext } from '../contexts/ContextProvider'

import avatar from '../data/metamask.png'

function Navbar() {

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
      <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title="Menu" 
                    color='black' 
                    icon = {<AiOutlineMenu/>}
                    customFunc = {handleActiveMenu}/>

      <div className="flex">
        
        <TooltipComponent 
          content='Profile'
          position='BottomCenter'>
              <div className='flex items-center gap-2 cursor-pointer p-1 hoer:bg-light-gray rounded-lg'
                    >
                  
                  <img className="rounded-full w-8 h-8 " src={avatar} alt='user-profile'/>

                  <p>
                    {/* <span className="text-gray-400 text-14">Hoşgeldin, </span> */}
                    {' '}
                    <span className='text-gray-400 font-bold ml-1 text-14'>{"Metamask Adres"}</span>
                  </p>

                  <MdKeyboardArrowDown className='text-gray-400 text-14'/>
              </div>
        </TooltipComponent>

      </div>
    </div>
  )
}

export default Navbar
