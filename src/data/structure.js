import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';



export const links = [
    {
      title: 'Ana Sayfa',
      links: [
        {
          name: 'MainPage',
          linkName:'',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'İhaleler',
      links: [
        
        {
          name: 'Aktif İhaleler',
          linkName:'activeBids',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'Geçmiş İhaleler',
          linkName:'passiveBids',
          icon: <IoMdContacts />,
        },
        {
          name: 'İhale Teklifleri',
          linkName:'offerBids',
          icon: <RiContactsLine />,
        },
      ],
    },
    {
        title: 'İşlemler',
        links: [
          {
            name: 'Şirket Teklifleri',
            linkName:'companyBids',
            icon: <AiOutlineShoppingCart />,
          },
          
        ],
      },
  ];
  