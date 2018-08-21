import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'

class Index extends React.Component {
  render () {
    const {posts} = this.props
    console.log(posts)
    return (
      <Layout>
        {posts.map((p, i) => {
          return (
            <article>
              <h2><Link href={`/p/${p.link}`}><a>{p.title.rendered}</a></Link></h2>
              <div className='meta'>
                <span>Published {p.date}</span> <span>(Modified {p.modified})</span>
              </div>
              <div className=''>
                {p.excerpt.rendered}
              </div>
              <div className='article-footer'>
                <Link href={`/p/${p.link}`}><a>Read the post <em>{p.title.rendered}</em></a></Link>
              </div>
            </article>
          )
        })}
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
