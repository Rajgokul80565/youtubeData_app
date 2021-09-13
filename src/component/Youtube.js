import React ,{useState,  useContext} from 'react'
import Videos from './Videos';
import {YoutubeDataContext} from '../Context/YoutubeContext';


export const KEY = 'AIzaSyA2d1vzSo89SeqEFPqh7VzuYpNgtn6ZQcU'
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=productivity&key=AIzaSyA2d1vzSo89SeqEFPqh7VzuYpNgtn6ZQcU

function Youtube() {

    
    const [searchWord, setSearchWord] = useState('');
    const {ytdata, setKeyword} = useContext(YoutubeDataContext);

    const onChangeSearch = (e) => {
        const result = e.target.value;
        setSearchWord(prevSearch => prevSearch = result);
    }

    const submitData = (e) => {
        e.preventDefault();
        setKeyword(prevWord => prevWord =searchWord);
        setSearchWord('');
    }

    return (
        <div>
            <form onSubmit={submitData} >
                <input type="text" placeholder="search..." value={searchWord} onChange={onChangeSearch} />
                <button>Search</button>
            </form>
            <div>
                <ul>
                    {ytdata.map(yt =>{
                        return(
                            <Videos
                                image={yt.snippet.thumbnails.high.url}
                                title ={yt.snippet.title}
                                id = {yt.id.videoId}
                                channelTitle = {yt.snippet.channelTitle}
                                />
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Youtube
