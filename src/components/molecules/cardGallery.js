import React from 'react';
import { ImageCard } from '../atoms/imageCard';

export const CardGallery = () => (
  <div className='my-4' >
    <div className='row'>
      <div className='col-sm-4'>
      <ImageCard src='https://as2.ftcdn.net/jpg/02/47/32/09/500_F_247320990_cUitVX8lsAlwHFLUduYM0wfdhmsJQqks.jpg' />
      </div>
      <div className='col-sm-4'>
      <ImageCard src='https://as2.ftcdn.net/jpg/01/75/40/41/500_F_175404136_Xu0MC8RM9RWgcTLpd9PfopUj0wm5Qtoo.jpg' />
      </div>
      <div className='col-sm-4'>
      <ImageCard src='https://as1.ftcdn.net/jpg/02/68/21/62/500_F_268216280_Mnhp2DiV7s7Ok5pOo5osPvtRG1NMGcpS.jpg' />
      </div>
    </div>
  </div>
)