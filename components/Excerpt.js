import React from 'react'
import Link from 'next/link'

class Excerpt extends React.Component {
  render () {
    const {post} = this.props
    const date = new Date(post.date)
    const modifiedDate = new Date(post.modified)
    const cleanDate = date.toLocaleDateString()
    const cleanModifiedDate = modifiedDate.toLocaleDateString()
    const diffDate = post.date === post.modified
    return (
      <article>
        <h2><Link as={`/p/${post.slug}`} href={`/post?slug=${post.slug}`}><a>{post.title.rendered}</a></Link></h2>
        <div className='meta'>
          <span>Published {cleanDate}</span> {!diffDate && <span>(Modified {cleanModifiedDate})</span>}
        </div>
        <div className='excerpt' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        <div className='article-footer'>
          <Link as={`/p/${post.slug}`} href={`/post?slug=${post.slug}`}><a>Read the post <em>{post.title.rendered}</em></a></Link>
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
          h2 {
            margin-top: 0;
            margin-bottom: 0;
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
