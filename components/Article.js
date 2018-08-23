import React from 'react'
import Link from 'next/link'

class Article extends React.Component {
  render () {
    const {post} = this.props
    return (
      <article>
        <h1>{post.title.rendered}</h1>
        <div className='meta'>
          <span>Published {post.date}</span> <span>(Modified {post.modified})</span>
        </div>
        <div className='content' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
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
          h1 {
            margin-top: 0;
          }
        `}</style>
      </article>
    )
  }
}

export default Article
