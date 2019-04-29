// API search function

const returnPosts = (subReddit: string = '') => {
    return fetch(
        `https://www.reddit.com/r/${subReddit}.json`
      )
        .then(r => r.json())
        .then(r => r.data.children)
        .catch(error => {
          console.error(error);
          return [];
        });
}


export {returnPosts}