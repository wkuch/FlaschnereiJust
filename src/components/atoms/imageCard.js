import React from 'react'

export const ImageCard = props => (
  <div className="mb-4">
    <img className="img-fluid" src={props.src} />
    <div>
      <h5 className="mt-2 mb-1">Heading</h5>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
    </div>
  </div>
)
