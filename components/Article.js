import React from 'react'
import {PostDate} from '@jonasknutsen/wp-react-components'
import Head from 'next/head'

class Article extends React.Component {
  render () {
    const {post} = this.props
    return (
      <article>
        <Head>
          <title>{post.title.rendered} - @jonasknutsen</title>
          <meta name='description' content={post.excerpt.rendered} />
        </Head>
        <h1>{post.title.rendered}</h1>
        <PostDate post={post} className='meta' />
        <div className='content' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        <style jsx>{`
          article {
            margin: 1rem;
            padding: 1rem;
            background-color: #fafafa;
            border: 1px solid #f0f0f0;
          }
          h1 {
            margin-top: 0;
            margin-bottom: 0;
          }
        `}</style>
        <script dangerouslySetInnerHTML={
          {
            __html: `{
              "@context": "http://schema.org/",
              "@type": "BlogPosting",
              "datePublished": "${post.date}",
              "dateModified": "${post.modified}",
              "author": {
                "@type": "Person",
                "name": "Jonas Knutsen"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Jonas Knutsen",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://google.com/logo.jpg"
                }
              },
              "headline": "${post.title.rendered}",
              "description": "${post.excerpt.rendered}",
              "image": [
                "https://example.com/photos/1x1/photo.jpg",
                "https://example.com/photos/4x3/photo.jpg",
                "https://example.com/photos/16x9/photo.jpg"
               ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${post.link}"
              }
            }`
          }
        } type='application/ld+json'
        />
      </article>
    )
  }
}

export default Article
