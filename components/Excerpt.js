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
            box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.12);
          }
          .meta {
            font-size: .8rem;
          }
        `}</style>
      </article>
    )
  }
}

export default Excerpt
