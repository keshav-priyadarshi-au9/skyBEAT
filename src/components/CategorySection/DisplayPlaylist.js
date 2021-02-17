import React from 'react' ;
import {Link} from 'react-router-dom' ;

const DisplayPlaylist = (props) => {

    const renderPlaylist = (data) => {
        if(data)
        { 
            return data.playlists.items.map( (item) => {
                return (
                    <div className="category" key={item.id} >
                        <Link to={`/categoryplaylist/${item.id}`} >
                            <img src={item.images[0].url} className="category-image" alt="categoryImage" />
                            <div className="category-name">{ item.name }</div>
                        </Link>
                    </div>
                )
            } )
        }
    }
    
    return(
        <>
            <div>
                <h3 className="category-heading" >PlayLists</h3>
                <div className="category-container" >
                    {renderPlaylist(props.playlistData)}
                </div>
            </div>
        </>
    )
}

export default DisplayPlaylist ;