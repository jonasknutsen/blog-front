import React from 'react'

class Article extends React.Component {
  render () {
    const {post} = this.props
    const date = new Date(post.date)
    const modifiedDate = new Date(post.modified)
    const cleanDate = date.toLocaleDateString()
    const cleanModifiedDate = modifiedDate.toLocaleDateString()
    const diffDate = post.date === post.modified
    return (
      <article>
        <h1>{post.title.rendered}</h1>
        <div className='meta'>
          <span>Published {cleanDate}</span> {!diffDate && <span>(Modified {cleanModifiedDate})</span>}
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
            margin-bottom: 0;
          }
        `}</style>
      </article>
    )
  }
}

export default Article
