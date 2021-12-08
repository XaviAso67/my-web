import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

import { Post } from 'types'

export default () => {
  const { posts }: { posts: Post[] } = useRouteData()

  return (
    <div>
      <h1>Es la hora del blog.</h1>
      <br />
      Todos los Posts:
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
