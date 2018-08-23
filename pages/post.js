import React from 'react'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import Article from '../components/Article'

class Post extends React.Component {
  render () {
    const {post} = this.props
    return (
      <Layout>
        <Article post={post[0]} />
      </Layout>
    )
  }
}

Post.getInitialProps = async function (context) {
  const {slug} = context.query
  console.log(slug)
  const res = await fetch(`http://www.jonasknutsen.com/wp-json/wp/v2/posts?slug=${slug}`)
  const post = await res.json()

  return {
    post
  }
}

export default Post
