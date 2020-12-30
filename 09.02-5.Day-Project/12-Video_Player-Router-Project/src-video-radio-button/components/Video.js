import React from 'react'

export default function Video(props) {
  return (
    <div>
      <video src={props.source} controls autoPlay />
    </div>
  )
}
