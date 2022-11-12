import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,
  Filter,Page,ExcelExport,PdfExport,Search,Edit,Inject,Toolbar} from '@syncfusion/ej2-react-grids'
import Header from '../components/Header'
import {activeBidsData,activeBidsGrid} from '../data/structure'
function PassiveBids() {
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