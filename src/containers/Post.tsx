import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

import { Post } from '../../types'

export default () => {
  const { post }: { post: Post } = useRouteData()
  return (
    <div>
      <Link to="/blog/">{'<'} Atrás</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
