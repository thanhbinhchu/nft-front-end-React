
import './App2.css';

import { BaseMenuOnTop } from './templates/BaseMenuOnTop';
import { Footer } from './templates/Footer';
import { Form } from './templates/Form';
import {Table} from './templates/Table'
import { Table1 } from './templates/backup/Table1';

import DatatablePage from './templates/TableMDB';
import { TableNFTmdb } from './templates/TableNFTmdb';

function App() {
  return (
    <div className="App">

      <div>

        <BaseMenuOnTop />


        <div class="container | my-4">
            <Form />
        </div>


        <div class="container | my-4">
            <Table />
        </div>

        <div class="container | my-4">
          {/* <DatatablePage /> */}


          {/* <TableNFTmdb /> */}
        </div>
          


        <Footer />

      </div>


    </div>
  );
}

export default App;
