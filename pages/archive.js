import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import {PostDate} from '@jonasknutsen/wp-react-components'

import Layout from '../components/Layout'
import {stripDomain} from '../utils/format'

class Archive extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      exclude: []
    }
  }
  render () {
    const {posts, categories} = this.props
    return (
      <Layout>
        <h1>Archive for @jonasknutsen</h1>
        <ul className='category-list'>
          {categories.map((category, index) => {
            const elementClass = this.state.exclude.includes(category.id) ? 'excluded' : ''
            return (
              <li key={index} onClick={() => this.filterCategory(category.id)} className={elementClass}>
                {category.name}
              </li>
            )
          })}
        </ul>
        <ul className='post-list'>
          {posts.map((post, index) => {
            if (!post.categories.some(p => this.state.exclude.includes(p))) {
              return (
                <li key={index}>
                  <Link as={stripDomain(post.link)} href={`/post?slug=${post.slug}`}><a>{post.title.rendered}</a></Link>
                </li>
              )
            }
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
            background-color: #F0E8D0;
            margin: 2px;
            cursor: pointer;
          }
          .category-list li.excluded {
            background-color: #888;
            color: #fff;
          }
        `}</style>
      </Layout>
    )
  }

  filterCategory = (cat) => {
    if (this.state.exclude.includes(cat)) {
      this.setState({
        exclude: this.state.exclude.filter(function (category) {
          return category !== cat
        })
      })
    } else {
      this.setState({
        exclude: [...this.state.exclude, cat]
      })
    }
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
