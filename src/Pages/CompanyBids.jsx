import React from 'react'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';


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
    return (
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        
            
        <div className='control-section input-content-wrapper'>

            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>PRIVATE KEY</b></div>
            <TextBoxComponent placeholder="Private key giriniz." cssClass="e-outline" floatLabelType="Auto" />
          </div>

          <div className="row custom-margin">
            <div className="m-1 col-xs-6 col-sm-6 col-rg-6 col-md-6"><b>TEKLİF FİYATI</b></div>
            <TextBoxComponent placeholder="IPFS linkini yazınız." cssClass="e-outline" floatLabelType="Auto" />
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