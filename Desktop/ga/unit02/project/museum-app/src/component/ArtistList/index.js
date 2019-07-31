import React from 'react'
import './ArtistList.css'
import Artist from '../Artist'
import { Link, Route } from 'react-router-dom'

const ArtistList = (props) => {
    return (
        <div className="list">
           <Link to={`/${props.name}`}><h4>{ props.name }</h4></Link>
           <Route path={`/${props.name}`} render={()=> <Artist artist={props.artist} />} /> 
        </div>
    )
}

export default ArtistList