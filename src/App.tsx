import React, { useState, useEffect, KeyboardEvent } from "react";

import axios from 'axios';

import "./App.css";
import { Post } from "./components/Posts";

const App = () => {
  const [sub, setSub] = useState('aww');
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`https://www.reddit.com/r/${sub}.json`)
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

  const _onKeyUp = (event: KeyboardEvent): void => {
    const target = event.target as HTMLInputElement;

    if (event.key == 'Enter') {
      setSub(target.value)
    }
  }

  return (
    <div>
      <div className="header">
        <input onKeyDown={_onKeyUp} />
      </div>

      {error ? `No subreddit exists with the name: '${sub}', please try again` : ''}

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