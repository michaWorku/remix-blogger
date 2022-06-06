import { useParams } from "@remix-run/react"

function Post() {
  const {postId} = useParams()
  return (
    <div>
        <h1>Post {postId}</h1>
    </div>
  )
}

export default Post