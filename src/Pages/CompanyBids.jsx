import React , {useState} from 'react'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import Header  from '../components/Header'
import { activeBidsData } from '../data/structure'
import Button from '../components/Button'
import { ethers } from 'ethers'
import main_abi from '../data/main_abi.json'
import sub_abi from '../data/sub_abi.json'

class CompanyBids extends React.Component {

  componentDidMount() {
    const main = '0xB76f9b628B4A2Ab4D63F0C73FdAf6f4C1C7959bA'
    const hexToDecimal = hex => parseInt(hex, 16);
    const getCount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const mainContract = new ethers.Contract(main, main_abi, provider);
    const userAddress = await window.ethereum.request({method: 'eth_requestAccounts'});

    const subCount = await mainContract.getSubContractCount();
    console.log('Sub contract count')
    console.log(hexToDecimal(subCount))
    for (var i = 0; i < hexToDecimal(subCount); i++) {

        var subContractAddress = await mainContract.getSubContract(i);
        const signer = await provider.getSigner();
        var subContract = new ethers.Contract(subContractAddress, sub_abi, signer);
        

        var subTenderDetail = await subContract.getTenderDetail();
        var subBidderControl = await subContract.getBidderControl(userAddress[0]);
        if(subTenderDetail === "Qmd3hMJ2PDzA7vdSxdXfJ6grPZba8dZ5f4FZqKhL5vXuW3" ){

          var bytes32data = ethers.utils.formatBytes32String("testyazi");
          console.log(bytes32data);
          var shaData = ethers.utils.sha256(bytes32data);
          console.log(shaData);
          await subContract.setOffer("QmY6i7f4vt6dKfxojwJmR72BUCvY56bBPFFoKSjhVnPovn", shaData);


          //await subContract.setOffer("QmY6i7f4vt6dKfxojwJmR72BUCvY56bBPFFoKSjhVnPovn", 0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08);
        }
        console.log(subBidderControl);
        console.log(subTenderDetail);

        // eğer subBidderControl true ise verileri yazdır.

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


  render() {

    return (
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
         

      </div>
    )
  }
}


export default CompanyBids