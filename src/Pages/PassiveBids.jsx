import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,
  Filter,Page,ExcelExport,PdfExport,Search,Edit,Inject,Toolbar} from '@syncfusion/ej2-react-grids'
import Header from '../components/Header'
import {activeBidsData,activeBidsGrid} from '../data/structure'
import { ethers } from 'ethers'
import main_abi from '../data/main_abi.json'
import sub_abi from '../data/sub_abi.json'
function PassiveBids() {

  const componentDidMount = () => {
    const main = '0x06F945BD37c8eBf5D98E374Af63BeF3B981FB997'
    const hexToDecimal = hex => parseInt(hex, 16);
    const getCount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const mainContract = new ethers.Contract(main, main_abi, provider);

    const subCount = await mainContract.getSubContractCount();
    console.log('Sub contract count')
    console.log(hexToDecimal(subCount))
    for (var i = 0; i < hexToDecimal(subCount); i++) {

        var subContractAddress = await mainContract.getSubContract(i);
        var subContract = new ethers.Contract(subContractAddress, sub_abi, provider);

        var subTenderDetail = await subContract.getTenderDetail();
        console.log(subTenderDetail);

        // eğer getTenderStatus == false ise ve getBidStop == true ise veriyi al.

      /* this.data.activeBidsData.push({
        ContratId: "10248",
        CompanyType: 'Elektronik',
        Explanation: 'Açıklama...',
        Unit: 'adet',
        ProductCode: 123,
        İhale: 'İhale',
      });
      */
      
    }
  };
  getCount();
  }

  componentDidMount();

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Geçmiş İhaleler'></Header>
      <GridComponent id='gridcomp'
                    dataSource={activeBidsData}
                    allowPaging
                    allowSorting
                    toolbar={['Search','Delete']}
                    editSettings={{allowDeleting:true}}
                    width="auto"
                    >
        <ColumnsDirective>
          {activeBidsGrid.map((item,index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport,Search,Toolbar]}/>
      </GridComponent>
    </div>
)}

export default PassiveBids