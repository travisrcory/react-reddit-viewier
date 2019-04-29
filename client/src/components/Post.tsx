import React from "react";
import { Video } from "./Video";

const Post = (props: { post: any }) => {
  const post = props.post;

  if (post.over_18) {
    return (
      <div className="post card">
          <img src="https://media.giphy.com/media/uIGfoVAK9iU1y/200w_d.gif" />
      </div>
    );
  }

  let postContent;

  if (post.is_video) {
    postContent = <Video video={post.media.reddit_video} />
  }


  return (
    <div className="post card">
        <h2>
            {post.title}
        </h2>

        {postContent}


        <a href={`https://reddit.com${post.permalink}`} target="_blank">Link</a>
    </div>
  );
}

export {Post}