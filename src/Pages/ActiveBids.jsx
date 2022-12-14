import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {
  GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,
  Filter, Page, ExcelExport, PdfExport, Search, Edit, Inject, Toolbar
} from '@syncfusion/ej2-react-grids'
import Header from '../components/Header'
import Button from '../components/Button'
import { ethers } from 'ethers'
import main_abi from '../data/main_abi.json'
import sub_abi from '../data/sub_abi.json'

import { activeBidsData, activeBidsGrid } from '../data/structure'


export default class ActiveBids extends React.Component {
  rowSelected() {
    if (this.grid) {
      /** Get the selected row indexes */
      const selectedrowindex = this.grid.getSelectedRowIndexes();
      /** Get the selected records. */
      const selectedrecords = this.grid.getSelectedRecords();
      console.log("hello")
      alert(selectedrowindex + " : " + JSON.stringify(selectedrecords));
    }
  }
  currentData = ""
  data = {
    activeBidsData: []
  };

  componentDidMount() {

    this.data.activeBidsData = []

    console.log('Active bids has mounted')
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

        var subTenderStatus = await subContract.getTenderStatus();
        console.log('subTenderStatus')
        console.log(subTenderStatus)
        var subBidStart = await subContract.getBidStart();
        console.log('subBidStart')
        console.log(subBidStart)
        // e??er getTenderStatus == true ise ve getBidStart == true ise veriyi al.
        if(subTenderStatus===true && subBidStart===false){
          var axios = require('axios');
          console.log('axios')
          var config = {
            method: 'get',
            url: 'https://api.web3.storage/car/'+subTenderDetail,
            headers: { 
              'Access-Control-Allow-Origin' : '*',
            },
          };

          const res = await axios(config)
          console.log('Data:')
          const last_data = res.data.replace(res.data.split('"',2)[0],'');
          console.log('{'+last_data)
          const last_json = JSON.parse('{'+last_data)
          this.currentData = last_json
        }
        console.log(this.currentData)
        
        activeBidsData.push({
          ContractId: 128,
          CompanyName: this.currentData.kurum_adi,
          Explanation: this.currentData.sozlesmeKonu,
          FinishDate: this.currentData.urun_teslim_tarihi,
        })

        this.grid.dataSource.concat(activeBidsData)
    }
    };

    getCount();

  }

  componentDidUpdate() {

  }

  render() {


    this.rowSelected = this.rowSelected.bind(this);

    return (

      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header category='Page' title='Aktif ??haleler'></Header>

        <Link to="/Bid" className="btn btn-primary">??haleye Ba??vur</Link>
        <GridComponent id='gridcomp'
          dataSource={activeBidsData}
          allowPaging
          allowSorting
          toolbar={['Search']}
          width="auto"
          rowSelected={this.rowSelected} ref={g => this.grid = g}
        >
          <ColumnsDirective>
            {
              activeBidsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Search, Toolbar]} />
        </GridComponent>
      </div>
    )
  }
}
