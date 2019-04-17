import React from "react";

const Post = (props: { post: any }) => {
  const post = props.post;

  if (post.over_18) {
    return (
      <div className="post card">
          <img src="https://media.giphy.com/media/uIGfoVAK9iU1y/200w_d.gif" />
      </div>
    );
  }

  return (
    <div className="post card">
        <h2>
            {post.title}
        </h2>

        <a href={`https://reddit.com${post.permalink}`} target="_blank">Link</a>
    </div>
  );
}

export {Post}