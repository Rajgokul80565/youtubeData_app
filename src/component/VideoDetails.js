import React, {useContext, useEffect} from 'react'
import Videos from '../component/Videos';
import { YoutubeDataContext } from './../Context/YoutubeContext';

function  VideoDetails({match}) {
   
    const url = `https://www.youtube.com/embed/${match.params.id}`;
    console.log(match);
    const {ytdata,setData} = useContext(YoutubeDataContext);
    console.log(ytdata);

    useEffect(()=>{
      let newArr = ytdata.filter(yt => yt.id.videoId !== match.params.id);
      setData([...newArr]);
    },[match.params.id])
    

    return (
        <div>
          <iframe src={url} title={match.title}></iframe>
          <hr />
          <div className = "related-content">
          {ytdata.map((yt)=>{
                         return(  <Videos key={yt.id.videoId}
                                image={yt.snippet.thumbnails.high.url}
                                title ={yt.snippet.title}
                                id = {yt.id.videoId}
                                channelTitle = {yt.snippet.channelTitle}
                                />
          )})}
             
          </div>
        </div>
    )
}

export default VideoDetails;
