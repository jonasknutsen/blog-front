import React from 'react'
import Link from 'next/link'
import {PostDate} from '@jonasknutsen/wp-react-components'

import {stripDomain} from '../utils/format'

class Excerpt extends React.Component {
  render () {
    const {post} = this.props
    const link = stripDomain(post.link)
    return (
      <article>
        <h2><Link as={link} href={`/post?slug=${post.slug}`}><a>{post.title.rendered}</a></Link></h2>
        <PostDate post={post} className='meta' />
        <div className='excerpt' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        <div className='article-footer'>
          <Link as={link} href={`/post?slug=${post.slug}`}><a>Read the post <em>{post.title.rendered}</em></a></Link>
        </div>
        <style jsx>{`
          article {
            margin: 1rem;
            padding: 1rem;
            background-color: #fafafa;
            border: 1px solid #f0f0f0;
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
