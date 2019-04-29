import React, { useState, useEffect, KeyboardEvent } from "react";

import "./App.css";
import { Post } from "./components/Post";

interface Posts {
  after: string | null
  before: string | null
  children: any[]
  dist: number
  modhash: string
}

const defaultPostState: Posts = {
  after:  null,
  before:  null,
  children: [],
  dist: 0,
  modhash: ''
};

const App = () => {
  const [sub, setSub] = useState('aww');
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState(defaultPostState);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return
    }

    setIsFetching(true);
  }

  async function fetchData(withAfter: boolean): Promise<void>  {
    let url = `https://www.reddit.com/r/${sub}.json?limit=10`;

    if (withAfter) {
      url = `${url}&after=${posts.after}`;
    }

    fetch(url)
    .then((response: Response) : Promise<JSON> => response.json())
    .then((fetchedPosts: any) => {
      setPosts(fetchedPosts.data);
    })
    .catch(error => {
      console.error(error);
      setError(true);
    });
  }

  useEffect(
    () => {
      setPosts(defaultPostState);
      fetchData(false);
    },
    [sub]
  );

  useEffect(
    () => {
      if (!isFetching) return;

      fetchData(true);

      setIsFetching(false);
    },
    [isFetching]
  );

  useEffect(
    () =>  {
      setError(false)
    },
    [posts]
  );

  const _onKeyUp = (event: KeyboardEvent): void => {
    const target = event.target as HTMLInputElement;

    if (event.key === 'Enter') {
      setSub(target.value)
    }
  }

  return (
    <>
      <div className="header">
        <input onKeyDown={_onKeyUp} />
      </div>

     {error ? `No subreddit exists with the name: '${sub}', please try again` : ''}

      {
        posts.children.length > 0 ?

        posts.children.map((post: any, index: number) => {
          return <Post post={post.data} key={index} />
        })

        : 'LOADING'
      }

      {isFetching ? 'LOADING' : ''}
    </>
  );
}

export default App;

export {App}