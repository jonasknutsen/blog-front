import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import {stripDomain} from '../utils/format'

class Archive extends React.Component {
  render () {
    const {posts, categories} = this.props
    return (
      <Layout>
        <h1>Archive for @jonasknutsen</h1>
        <ul className='category-list'>
          {categories.map((category, index) => {
            return (
              <li key={index} onClick={() => this.filterCategory(category.id)}>
                {category.name}
              </li>
            )
          })}
        </ul>
        <ul className='post-list'>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link as={stripDomain(post.link)} href={`/post?slug=${post.slug}`}><a>{post.title.rendered}</a></Link>
              </li>
            )
          })}
        </ul>
        <style jsx>{`
          .category-list {
            display: flex;
            list-style-type: none;
            padding-left: 0;
            flex-wrap: wrap;
          }
          .category-list li {
            padding: .5rem;
            background-color: red;
            margin: 2px;
          }
        `}</style>
      </Layout>
    )
  }

  filterCategory = (cat) => {
    console.log('category', cat)
  }
}

Archive.getInitialProps = async function () {
  const postRes = await fetch('http://www.jonasknutsen.com/wp-json/wp/v2/posts?per_page=100')
  const postData = await postRes.json()
  const catRes = await fetch('http://www.jonasknutsen.com/wp-json/wp/v2/categories?per_page=100')
  const catData = await catRes.json()

  return {
    posts: postData,
    categories: catData
  }
}

export default Archive
