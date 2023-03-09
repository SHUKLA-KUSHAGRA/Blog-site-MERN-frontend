import React from 'react'

function PostCard({props}) {
  return (
    <>
        <h1>{props.category}</h1>
        <h1>{props.title}</h1>
    </>
  )
}

export default PostCard;