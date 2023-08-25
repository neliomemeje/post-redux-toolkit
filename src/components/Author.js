import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const Author = ({ userID }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userID);
  return <span>by: {author ? author.name : "unknown author"}</span>;
};

export default Author;
