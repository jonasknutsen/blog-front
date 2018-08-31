import React from 'react'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import Article from '../components/Article'
import AdSense from '../components/AdSense'

class Post extends React.Component {
  render () {
    const {post} = this.props
    return (
      <Layout>
        <AdSense />
        <Article post={post[0]} />
        <AdSense />
      </Layout>
    )
  }
}

Post.getInitialProps = async function (context) {
  const {slug} = context.query
  const res = await fetch(`http://cms.jonasknutsen.com/wp-json/wp/v2/posts?slug=${slug}`)
  const post = await res.json()

  return {
    post
  }
}

export default Post
