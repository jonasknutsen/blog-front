import React from 'react'

class AdSense extends React.Component {
  render () {
    return (
      <div>
        <span className='ad-title'>Advertisement</span>
        <div className='google-ad' />
        <style jsx>{`
          .ad-title {
            color: #aaa;
          }
          .google-ad {
            height: 6rem;
            background-color: #ddd;
          }
        `}</style>
      </div>
    )
  }
}
/*
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Bannerannonse -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9471602433076064"
     data-ad-slot="7332209006"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
*/

export default AdSense
