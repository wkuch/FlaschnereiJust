import React from 'react';

export const Paragraph = (props) => (
  <div  className='d-flex flex-column justify-content-center align-items-center text-center'>
    <div className='col-10'>
    <h3>{props.heading}</h3>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis, rhoncus euismod erat tincidunt. Donec tincidunt volutpat erat.</h6>
    </div>
  </div>
)