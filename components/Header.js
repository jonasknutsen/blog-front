import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='title'>@jonasknutsen</div>
        <style jsx>{`
          .title {
            font-size: 3rem;
            width: 100%;
            text-align: center;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
