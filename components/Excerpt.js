import React from 'react'
import Link from 'next/link'

class Excerpt extends React.Component {
  render () {
    const {post} = this.props
    return (
      <article>
        <h2><Link href={`/p/${post.link}`}><a>{post.title.rendered}</a></Link></h2>
        <div className='meta'>
          <span>Published {post.date}</span> <span>(Modified {post.modified})</span>
        </div>
        <div className='excerpt' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        <div className='article-footer'>
          <Link href={`/p/${post.link}`}><a>Read the post <em>{post.title.rendered}</em></a></Link>
        </div>
        <style jsx>{`
          article {
            margin: 1rem;
            padding: 1rem;
            background-color: #fafafa;
            border: 1px solid #f0f0f0;
          }
          .meta {
            font-size: .8rem;
          }
          h2 > a {
            color: #000;
          }
        `}</style>
      </article>
    )
  }
}

export default Excerpt
