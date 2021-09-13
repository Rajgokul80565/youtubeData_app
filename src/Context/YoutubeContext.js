import React, {useEffect , useState, createContext} from 'react'
import axios from 'axios';

export const YoutubeDataContext = createContext();

export const KEY = 'AIzaSyA2d1vzSo89SeqEFPqh7VzuYpNgtn6ZQcU';

function DataContext(props) {

    const [ytdata,setData] = useState([]);
    const [keyWord, setKeyword] = useState("Productivity");

    useEffect(() =>{
        const fetchData = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyWord}&key=${KEY}`);
            const data = await res.data.items;
            setData((preData)=>(
                [...data]
            ))
        }
        fetchData();
    }, [keyWord])

   

   

    return (
        <YoutubeDataContext.Provider value = {{ytdata, setKeyword, setData}}>
        {props.children}
        </YoutubeDataContext.Provider>
    )
}

export default DataContext
