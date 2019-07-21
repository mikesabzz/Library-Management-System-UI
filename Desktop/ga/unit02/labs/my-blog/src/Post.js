import React from 'react'
import './Post.css'

function Post(props) {
    return (
        <div className="post">
            <div className="area">
            <h2>{ props.title }</h2>
            <h4>{ props.description }</h4>
            </div>
        </div>
    )
}

export default Post