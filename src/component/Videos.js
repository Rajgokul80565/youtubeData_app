import React from 'react'
import {Link} from 'react-router-dom';



function Videos({image, title, id, channelTitle}) {

    return ( 
        <Link to ={`/video/${id}`} >
        <div key={id}>
            <img src={image} alt="thumbnail"  />
            <h3>{title}</h3>
            <h4>{channelTitle}</h4>
        </div>
        </Link>
    )
}

export default Videos

// <object data ={url}>
//</object>