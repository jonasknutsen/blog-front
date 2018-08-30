import React from 'react'

import config from '../config'

class AdSense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render () {
    return (
      <div>
        <span className='ad-title'>Advertisement</span>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={config.adSenseClient}
          data-ad-slot={config.adSenseSlot}
          data-ad-format='auto'
          data-full-width-responsive='true'
          data-adtest='on'
        />
        <style jsx>{`
          .ad-title {
            color: #aaa;
          }
        `}</style>
      </div>
    )
  }
}

export default AdSense
