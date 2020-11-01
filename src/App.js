import React from 'react';
import { Route } from 'react-router-dom';
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

const App = () => {
  return (
    <div>
      <Route path='/' component={PostListPage} exact/>
      <Route path='/:id' component={PostPage} exact/>
    </div>
  );
};

export default App;
