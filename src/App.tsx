import React, { useState, useEffect } from "react";

import axios from 'axios';

import "./App.css";
import { Post } from "./components/Posts";

const App = () => {
  const [sub, setSub] = useState('aww');
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function getFetchUrl() {
      return `https://www.reddit.com/r/${sub}.json`;
    }

    async function fetchData() {
      const result = await axios(getFetchUrl())
        .then(results => results.data.data.children)
        .catch(error => {
          console.error(error);
        });

      if (result) {
        setPosts(result);
      } else {
        setError(true);
      }
    }

    fetchData();
  }, [sub]);

  useEffect(() => {
    setError(false);
  }, [posts]);

  const _onKeyUp = (event: any) => {
    if (event.key == 'Enter') {
      event.currentTarget.getAttribute('value');

      setSub(event.target.value)
    }
  }

  return (
    <div>
      <div className="header">
        <input onKeyDown={e => _onKeyUp(e)} />
      </div>

      {error ? `No sub exists with the name: '${sub}', please try again` : ''}

      {
        posts.length > 0 ?

        posts.map((post: any) => {
          return <Post post={post.data} />
        })

        : 'LOADING'
      }
    </div>
  );
}

export default App;

export {App}