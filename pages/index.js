import React from 'react'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import Excerpt from '../components/Excerpt'

class Index extends React.Component {
  render () {
    const {posts} = this.props
    console.log(posts)
    return (
      <Layout>
        {posts.map((post, i) => {
          return (
            <Excerpt key={i} post={post} />
          )
        })}
        <style jsx>{`

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
