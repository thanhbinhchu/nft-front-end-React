import {useState , useEffect} from 'react'
// import { format } from 'date-fns';

export const Table1 = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli')
        .then((response) => response.json())
        .then((data) => setPosts(data.results))
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const [query, setQuery] = useState('')
    
    const changeHandler= (abc) => {
        setQuery(abc.target.value)
    } 

    const filterTitle = posts.filter(abc => {
        return abc.title.includes(query)
    })


    return (

        <div>

        <input type = 'text' value = {query} onChange={changeHandler} placeholder='Nom du NFT'></input>

        {filterTitle.map((post) => (
            <p key={post.mal_id}>{post.title}</p>
        ))}

        </div>

        

    )

}
export default Table1

