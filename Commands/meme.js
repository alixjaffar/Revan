module.exports = {
    name: 'purge',
    permissions: ["ADMINISTRATOR"],
    description: "This command deletes messages.",
     execute(message, args, Discord, client){
        const randomIndex = randomInt(0, subReddits.length);
        axios
          .get(`https://reddit.com/${subReddits[randomIndex]}/.json`)
          .then((resp) => {
            const {
              title,
              url,
              subreddit_name_prefixed: subreddit
            } = getRandomPost(resp.data.data.children);
            message.channel.send(`${title}\n${url}\n from ${subreddit}`);
          })
      }
    }
  
  
  function getRandomPost(posts) {
    const randomIndex = randomInt(0, posts.length);
    return posts[randomIndex].data;
  }
  