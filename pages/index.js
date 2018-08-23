import React from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import Layout from '../components/Layout'
import Excerpt from '../components/Excerpt'

class Index extends React.Component {
  render () {
    const {posts} = this.props
    return (
      <Layout>
        {posts.map((post, i) => {
          return (
            <Excerpt key={i} post={post} />
          )
        })}
        <div className='archive-link'>
          <Link href='/archive'><a>The full archive</a></Link>
        </div>
        <style jsx>{`
          .archive-link {
            margin: 0 auto;
            width: 10rem;
            padding: 1rem;
            border: 1px solid #f0f0f0;
            text-align: center;
          }
        `}</style>
      </Layout>
    )
  }
}

Index.getInitialProps = async function () {
  const res = await fetch('http://www.jonasknutsen.com/wp-json/wp/v2/posts')
  const data = await res.json()

  return {
    posts: data
  }
}

export default Index
