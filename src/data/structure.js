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
      title: 'Kullanıcı Tipi',
      links: [
        {
          name: 'Ana Sayfa',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'İhaleler',
      links: [
        {
            name: '',
            icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'Aktif İhaleler',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'Geçmiş İhaleler',
          icon: <IoMdContacts />,
        },
        {
          name: 'customers',
          icon: <RiContactsLine />,
        },
      ],
    },
    {
        title: 'İşlemler',
        links: [
          {
            name: '',
            icon: <AiOutlineShoppingCart />,
          },
          {
            name: 'İhale Ekle',
            icon: <IoMdContacts />,
          },
          
        ],
      },
  ];
  