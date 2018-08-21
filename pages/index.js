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
              <div className='excerpt' dangerouslySetInnerHTML={{__html: p.excerpt.rendered}} />
              <div className='article-footer'>
                <Link href={`/p/${p.link}`}><a>Read the post <em>{p.title.rendered}</em></a></Link>
              </div>
            </article>
          )
        })}
        <style jsx>{`
          article {
            margin: 1rem;
            padding: 1rem;
            box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.12);
          }
          .meta {
            font-size: .8rem;
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
