import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {useState , useEffect} from 'react'

export const TableNFTmdb = () =>{
    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli')

        .then((response) => response.json())

        .then((res) => {
            const posts = {
                columns: [
                  {
                    label: 'Nom du NFT',
                    field: 'name',
                    sort: 'asc',
                    width: 50
                  },
                  {
                    label: 'Date de la transaction',
                    field: 'date',
                    sort: 'asc',
                    width: 70
                  },
                  {
                    label: 'Montant',
                    field: 'montant',
                    sort: 'asc',
                    width: 20
                  },
                  {
                    label: 'Type',
                    field: 'type',
                    sort: 'asc',
                    width: 20
                  },
                  {
                    label: 'Statut',
                    field: 'statut',
                    sort: 'asc',
                    width: 50
                  },
                  {
                    label: 'Info',
                    field: 'info',
                    sort: 'asc',
                    width: 100
                  }
                ],
                
                rows: res.map((apiData) => ({state: apiData.name})),
            };
            setPosts(posts);

        });

        // .then((data) => setPosts(data.results))

        // .catch((err) => {
        //     console.log(err)
        // })
    }, []);

    
    
return (

    <MDBDataTable striped bordered small data={posts} />

);
}