import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
// Icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import edevlet from '../data/e_devlet.png'
import {companyLinks,competenceLinks,publicLinks} from '../data/structure'
import {useStateContext} from '../contexts/ContextProvider'
import {ethers} from 'ethers'
import competence_abi from '../data/competence_abi.json'
import company_abi from '../data/main_abi.json'

function Sidebar() {
  
  const ekapb_competence = '0xee6DE69163e91f943f7FE5429B628a3e50eCe9F2'

  const [competencetInfo, setCompetenceInfo] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(false);

  const getCompetenceInfo = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const competenceC = new ethers.Contract(ekapb_competence, competence_abi, provider);

    const isCompetenceCheck = await competenceC.getCompetence('0xd60784072b039d17d2267b00629b9a695909063c',123);
    
    setCompetenceInfo(isCompetenceCheck);
    //console.log('Competence')
    //console.log(competencetInfo)

  };

  getCompetenceInfo();

  const ekapb_company = '0x06F945BD37c8eBf5D98E374Af63BeF3B981FB997'

  const getCompanyInfo = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const companyC = new ethers.Contract(ekapb_company, company_abi, provider);

    const isCompanyCheck = await companyC.getAuthorized('0xd60784072b039d17d2267b00629b9a695909063c');
    
    setCompanyInfo(isCompanyCheck);
    //console.log('Company')
    //console.log(companyInfo)

  };

  getCompanyInfo()
  //const linkType = links
  const {activeMenu,setActiveMenu,screenSize} = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false)
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml3 h-screen ml:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to='/' onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3
                        mt-4 flex text-xl font-extrabold
                        tracking-tight dark:text-white
                        text-slate-800'>
            <img className="rounded-full w-8 h-8 " src={edevlet} alt='user-profile'/> <span>EKAPB</span>
          </Link>

          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' 
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-xl rounden full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        

        <div className='mt-10'>
        {
        competencetInfo ?
        competenceLinks.map((item) => (
          <div key = {item.title} > 
              <p className='text-gray-400 m-3 mt-4 uppercase'> 
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                      to = {`/${link.linkName}`}
                      key={link.linkName}
                      onClick={handleCloseSideBar}
                      className = {({isActive}) => 
                      isActive ? activeLink : normalLink}>
                        {link.icon}
                        <span className='capitalize'>
                          {link.name}
                        </span>

                </NavLink>
              ))}
            </div>
          ))
          :
          competenceLinks.map((item) => (
            <div key = {item.title} > 
                <p className='text-gray-400 m-3 mt-4 uppercase'> 
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                        to = {`/${link.linkName}`}
                        key={link.linkName}
                        onClick={handleCloseSideBar}
                        className = {({isActive}) => 
                        isActive ? activeLink : normalLink}>
                          {link.icon}
                          <span className='capitalize'>
                            {link.name}
                          </span>
  
                  </NavLink>
                ))}
              </div>
            ))
        
        
        }
        </div>
      </>

      )}
      </div>
  )}

export default Sidebar