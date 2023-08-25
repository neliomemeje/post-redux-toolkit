import "./App.css";
import PostsList from "./components/PostsList";
import AddPostsForm from "./components/AddPostsForm";

function App() {
  return (
    <main>
      <AddPostsForm />
      <PostsList />
    </main>
  );
}

export default App;
