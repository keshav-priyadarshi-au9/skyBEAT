import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPlaylist, action_track_id } from '../../action/ActionFile'; 
import './displayTracks.css'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Loaders from '../Loader/Loaders';


class DisplayTracks extends Component{
    constructor(props){
        super(props)
        
        this.state = {
        tracksInfo : '',
        modalIsOpen: false

    }
}

    componentDidMount=()=>{
        this.props.dispatch(userPlaylist())
    }

    handleChange = (data) => {
        const tInfo = this.props.tracks.items.filter( (item) => {
            return(
                item.track.id === data
            )
        }) 
        this.setState({
            tracksInfo : tInfo[0].track
        })
    }
    passingTrackIdToAction=()=>{
        this.props.dispatch(action_track_id(this.state.tracksInfo.id))
    }

    renderRecentTracks = ({tracks}) => {
        if(tracks)
        {
            return tracks.items.map( (item) => {
                return (
                    <tr style={{margin:"0",padding:"0"}} onClick={()=>this.handleChange(item.track.id)}>
                       
                        <td><img src={item.track.album.images[2].url} id={item.track.id} alt="categoryImage" /></td>
                        <td><AudiotrackIcon/> { item.track.name }</td>
                        <td>{item.track.album.release_date}</td>
                        <td>{item.track.popularity}</td>
                        <td>{item.track.artists[0].name}</td>
                        <td>{(item.track.duration_ms*1.6667e-5).toFixed(2)}</td>
                    </tr>
                )
            } )
        }
    }

    render(){
        return(
                <div style={{marginBottom:"90px"}} className="track_table">
                    <table id="table" className="table">  
                        <thead>
                            <tr className="heading_tr">
                                <td>Poster</td>
                                <td>Title</td>
                                <td>Release dt.</td>
                                <td>Popularity</td>
                                <td>Artist</td>
                                <td>Duration</td>
                            </tr>
                        </thead>
                        <tbody>{this.renderRecentTracks(this.props)}</tbody>
                    </table>
                {
                    this.state.tracksInfo ? 
                    this.passingTrackIdToAction()
                    : <Loaders/>
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        uPlaylist : state.UserPlaylistReducer.userPlaylist
    }
}
export default connect(mapStateToProps)(DisplayTracks);