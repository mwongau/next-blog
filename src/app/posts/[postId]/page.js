import { initialPosts } from "../../../postData";

const PostPage = async ({ params }) => {
  const { postId } = await params;

  const post = initialPosts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h3>Title: {post.title}</h3><br />
	  <h4>Date: {post.date}</h4><br />
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
