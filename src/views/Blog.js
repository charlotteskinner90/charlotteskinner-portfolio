import React from 'react'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNav'
import PostSection from '../components/PostSection'

import './Blog.css'

export default ({
  fields,
  posts = [],
  postCategories = [],
  showFeatured = true
}) => {
  const { title, subtitle } = fields
  posts = _sortBy(posts, ['date']).reverse()

  return (
    <main className='Blog'>
      <PageHeader
        title={title}
        subtitle={subtitle}
      />
      <div className='section'>
        <div className='container'>
          {!!postCategories.length && (
            <PostCategoriesNav categories={postCategories} />
          )}

          {!!posts.length && <PostSection posts={posts} />}
        </div>
      </div>
    </main>
  )
}
