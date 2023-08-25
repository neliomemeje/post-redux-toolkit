import { useSelector } from "react-redux";
import { selectAllPosts } from "../posts/postSlice";
import Author from "./Author";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const reversePosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = reversePosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p>
          <Author userID={post.userID} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <Reactions post={post} />
      </article>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
