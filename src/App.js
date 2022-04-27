import './App.css';
import { Base } from './templates/Base';
import { Form } from './templates/Form';
import {Table} from './templates/Table'
import DatatablePage from './templates/TableMDB';
import { TableNFTmdb } from './templates/TableNFTmdb';

function App() {
  return (
    <div className="App">
      <div class='container | my-4'>
        <Base />

        <div class="container | my-4">
            <Form />
        </div>


          {/* <div class="container-fluid p-0">
              <Table />
          </div> */}
        <div>

          <DatatablePage />

          {/* <TableNFTmdb /> */}
        </div>
          


      </div>


    </div>
  );
}

export default App;
