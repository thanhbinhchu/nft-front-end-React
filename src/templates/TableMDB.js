
import React from 'react';
import { MDBDataTable } from 'mdbreact';


const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Nom du NFT',
        field: 'name',
        sort: 'asc',
        width: 150,
        
      },
      {
        label: 'Date de la transaction',
        field: 'date',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Montant',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Type',
        field: 'office',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Statut',
        field: 'position',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Info',
        field: 'age',
        sort: 'asc',
        width: 50
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170'
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433'
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162'
      },
      {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: '$372'
      },
      {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: '$137'
      },
      {
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: '$327'
      },
      {
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        salary: '$205'
      }
    ]
  };

  return (
    <MDBDataTable 

    scrollY

    maxHeight="200px"
    striped 
    bordered 
    small 

    hover

    data={data} />
   
  );
}

export default DatatablePage;