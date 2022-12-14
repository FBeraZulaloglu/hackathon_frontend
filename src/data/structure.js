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


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const publicLinks = [
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
      ],
    },
  ];

  export const competenceLinks = [
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

  export const companyLinks = [
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

  export const activeBidsData = [
    {
      ContractId: "10248",
      CompanyName: 'Elektronik',
      Explanation: 'Açıklama...',
      FinishDate: '10 kasıma kadar',
    },
  ]

  export const activeBidsGrid = [
    
    {
      field: 'ContractId',
      headerText: 'Kontrat Adres',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'CompanyName',
      headerText: 'Tür',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    {
      field: 'Explanation',
      headerText: 'Açıklama',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'FinishDate',
      headerText: 'Birim',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    
  ]
  