import React from 'react'
import Link from 'next/link'
import { TwitterBoxIcon, GithubBoxIcon, LinkedinBoxIcon } from 'mdi-react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='topline'>
          <div className='topline-inner'>
            <nav>
              <ul>
                <li><Link href='/about'><a>About</a></Link></li>
                <li><Link href='/archive'><a>Archive</a></Link></li>
                <li><Link href='/contact'><a>Contact</a></Link></li>
              </ul>
            </nav>
            <div className='links'>
              <ul>
                <li><a href='https://www.twitter.com/jonasknutsen'><TwitterBoxIcon /></a></li>
                <li><a href='https://no.linkedin.com/in/jonas-knutsen-2bb4291b'><LinkedinBoxIcon /></a></li>
                <li><a href='https://github.com/jonasknutsen'><GithubBoxIcon /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='title'>@jonasknutsen</div>
        <div className='subtitle'>Words and code and rock and roll</div>
        <style jsx>{`
          .topline {
            background-color: #fafafa;
            border-bottom: 1px solid #f0f0f0;
            font-size: 1rem;
          }
          .topline-inner {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-directtion: row;
            justify-content: space-between;
          }
          ul {
            display: flex;
            flex-direction: row;
            list-style-type: none;
            padding-left: 0;
          }
          li {
            margin-right: 1rem;
            height: 1rem;
          }
          a {
            text-transform: uppercase;
            color: #363940;
          }
          .title {
            margin-top: 4rem;
            font-size: 3rem;
            width: 100%;
            text-align: center;
            font-weight: 300;
            letter-spacing:2px;
          }
          .subtitle {
            margin-bottom: 4rem;
            text-align: center;
            font-size: .8rem;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
