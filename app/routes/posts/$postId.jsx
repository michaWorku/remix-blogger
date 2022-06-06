import { Link, useLoaderData } from "@remix-run/react"
import { db } from '~/utils/db.server'

export const loader = async ({params})=>{
  
  const post = await db.post.findUnique({
    where: {id: params.postId}
  })

  if(!post) throw new Error('Post not found')

  const data = {post}

  return data
}

function Post() {
  const { post } = useLoaderData()
  return (
    <div>
      <div className='page-header'>
        <h1>{post.title}</h1>
        <Link to='/posts' className='btn btn-reverse'>
          Back
        </Link>
      </div>

      <div className='page-content'>{post.body}</div>

      {/* <div className='page-footer'>
        {user.id === post.userId && (
          <form method='POST'>
            <input type='hidden' name='_method' value='delete' />
            <button className='btn btn-delete'>Delete</button>
          </form>
        )}
      </div> */}
    </div>
  )
}

export default Post