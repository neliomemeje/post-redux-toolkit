import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../posts/postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");

  const users = useSelector(selectAllUsers);

  const selectOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const canSave = Boolean(title) && Boolean(content) && Boolean(userID);

  const addPost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userID));
      setContent("");
      setTitle("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        >
          <option value=""></option>
          {selectOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={addPost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
