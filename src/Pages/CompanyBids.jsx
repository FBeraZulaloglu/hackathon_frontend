import React , {useState} from 'react'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import Header  from '../components/Header'
import { activeBidsData } from '../data/structure'
import Button from '../components/Button'
import {ethers} from 'ethers'

class CompanyBids extends React.Component {


  floatFocus(args) {
    args.target.parentElement.classList.add('e-input-focus');
  }
  floatBlur(args) {
    args.target.parentElement.classList.remove('e-input-focus');
  }
  onIconClick(args) {
    args.persist();
    setTimeout(() => {
      args.target.classList.add('e-input-btn-ripple');
    }, 500);
  }
  onIconUnClick(args) {
    args.target.classList.remove('e-input-btn-ripple');
  }

  render() {
    
    
    function createSha256({tenderPublicKey,bidderPrivateKey,bidderOffer}){
      tenderPublicKey = '125489632142';
      const createBytes32 = ethers.utils.formatBytes32String(tenderPublicKey + bidderPrivateKey + bidderOffer);
      createSha256 = ethers.utils.sha256(createBytes32);
    }

    const prods = ['Kalem', 'Silgi', 'Elma'];

    return (
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
          
        {/* ListView element */}
        <div class="float-container">

          <div class="float-child">
            {
              prods.map((i) => 
              (
                <p className='text-black-300 m-2 mt-1 uppercase'>{i}</p>
              ))
            }
          
          </div>
          
          <div class="float-child">
          {
              prods.map((i) => 
              (
                <input className="e-input" type="text" onFocus={this.floatFocus} onBlur={this.floatBlur} placeholder="Ürün giriniz" />
              ))
            }
            
          </div>
        
        </div>

        <Button color='White'
              bgColor='Blue'
              borderRadius='10px'
              size='md'
              text='Download'>
        </Button>

        <div className='control-section input-content-wrapper'>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>PRIVATE KEY</b></div>
          <TextBoxComponent placeholder="Private key giriniz." cssClass="e-outline" floatLabelType="Auto" />
        </div>

        <div className="row custom-margin">
          <div className="m-1 col-xs-6 col-sm-6 col-rg-6 col-md-6"><b>TEKLİF FİYATI</b></div>
          <TextBoxComponent placeholder="Teklif ifyatınızı yazınız." cssClass="e-outline" floatLabelType="Auto" />
        </div>

        <div className="row custom-margin">
          <div className=" col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>SHA-256</b></div>
          <TextBoxComponent placeholder="SHA-256 kodunu giriniz." cssClass="e-outline" floatLabelType="Auto" />
        </div>

        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div className="e-input-group e-disabled">
            <input className="e-input" type="text" value="Readonly" onFocus={this.floatFocus} onBlur={this.floatBlur} placeholder="SHA-256 Girişi" />
          </div>
        </div>

      </div>
    )
  }
}


export default CompanyBids