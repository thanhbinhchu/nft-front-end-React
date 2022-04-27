import {useState , useEffect} from 'react'
// import { format } from 'date-fns';

export const Table = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli')
        .then((response) => response.json())
        .then((data) => setPosts(data.results))
        .catch((err) => {
            console.log(err)
        })
    }, [])

return (
    <div class="container">

        <div class= "container | my-4">
            <form>
                <div class="col">
                    <div class='row | my-4'>
                        <div class="col-sm-2 text-dark">
                            <label>NFT</label>
                        </div>
                        <div class="col-sm-1">
                            <input type = 'text' value = '' placeholder='Nom du NFT'></input>
                        </div>
                    </div>

                    <div class="row | my-4">

                        <div class="col-sm-2 text-dark">
                            <label>Entre</label>
                        </div>

                        <div class="col-sm-1">
                            <input type='date'></input>
                        </div>

                        <div class='col-sm-2 text-dark'>
                            <label>A</label> 
                        </div>

                        <div class='col-sm-1'>
                            <input type='date'></input>
                        </div>

                    </div>

                    <div class='row | my-4'>
                        <div class='col-sm-2 text-dark'>
                            <label>Type du NFT</label>
                        </div>
                         
                        <div class='col-sm-1'>
                            <select>
                            <option>Music</option>
                            <option>Sport</option>
                            <option>Trading card</option>
                            </select>

                        </div>

                    </div>
                
            <div>
                <button class="btn btn-secondary" type='submit'>Recherche</button>

            </div>

            </div>
            

         </form>
    </div>



    <div class= "container | my-4">

        {/* <div style="height: 500px; width:1180px; overflow: scroll;">   */}
        
        <table class="table table-bordered table-striped table-hover">
    
             <thead class="fixed table-primary text-center">
                <tr>
                    {/* <th>Numero</th> */}
                    <th>Nom du NFT</th>
                    <th>Date de la transaction</th>
                    <th>Montant (en USD)</th>
                    <th>Type</th>
                    <th>Statut</th>
                    <th>Info</th> 
                </tr>
            </thead>
            <tbody>
               
                {posts.map((post)=> {
                return (
                <tr key={post.mail_id}> 

                {/* <td> {post.id} </td>  */}
                <td> {post.title} </td> 
                <td> {post.start_date} </td> 
                <td> {post.score} </td> 
                <td> {post.type} </td>
                <td> {post.rated} </td>
                <td> {post.members} </td>
                 
                
        
                </tr> )} 
                )}

        
            </tbody>
        </table>

        

    </div>
    </div>
    
)
}

export default Table