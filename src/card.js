import React from 'react'
import PropTypes from 'prop-types'
import "./card.css"

export default function card(props) {
  return (
    <div className="card">
        <img src={props.image} />
            <h2>{props.name}</h2>
            <h3>{props.rate}</h3>
    </div>
  )
}
