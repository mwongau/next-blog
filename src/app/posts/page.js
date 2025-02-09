import Link from "next/link";
import { initialPosts } from "../../postData";

const PostsPage = () => {
  return (
    <div>
	  <h2>Blog</h2>
	  <br />
	  <h4>Select post to view:</h4>
	  <br />
      {initialPosts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}><h4 className="font-bold">{post.title}</h4></Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
