import React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
  render () {
    const year = new Date().getFullYear()
    return (
      <footer>
        <div className='links'>
          <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/archive'><a>Archive</a></Link></li>
            <li><a href='https://github.com/jonasknutsen/blog-front/issues/new'>Found a bug?</a></li>
          </ul>
        </div>
        <div className='copyright'>
          &copy; 2008 - {year} Jonas Knutsen. All right reserved.
        </div>
        <style jsx>{`
          footer {
            margin-top: 1rem;
            border-top: 1px solid #888;
            background-color: #F0E8D0;
            padding-bottom: 1rem;
          }
          ul {
            display: flex;
            flex-direction: row;
            list-style-type: none;
            padding-left: 0;
            justify-content: center;
          }
          li {
            margin-right: 1rem;
            height: 1rem;
          }
          a {
            text-transform: uppercase;
            color: #363940;
          }
          .copyright {
            text-align: center;
            font-size: .8rem;
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
