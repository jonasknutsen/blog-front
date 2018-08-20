import React from 'react'
import fetch from 'isomorphic-fetch'

class Index extends React.Component{
  render () {
    const {posts} = this.props
    console.log(posts)
    return (
      <div>
        Hello
        {posts.map((p, i) => {
          return (
            <div>{p.title.rendered}</div>
          )
        })}
      </div>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('http://www.jonasknutsen.com/wp-json/wp/v2/posts')
  const data = await res.json()

  return {
    posts: data
  }
}

export default Index
