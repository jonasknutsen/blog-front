import React from 'react'

import config from '../config'

class AdSense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render () {
    return (
      <div className='ad'>
        <span className='ad-title'>Advertisement</span>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-9471602433076064'
          data-ad-slot='7332209006'
          data-ad-format='auto'
          data-full-width-responsive='true'
          data-adtest='on'
        />
        <style jsx>{`
          .ad {
            border: 1px solid #525252;
            margin: .2rem;
            border: .2rem;
          }
          .ad-title {
            color: #525252;
          }
        `}</style>
      </div>
    )
  }
}

export default AdSense
