const bot = require("./stop_politicizing_bot");
const twit = require("twit");
const dotenv = require("dotenv");

function main() {
  dotenv.load();

  const authData = {
    consumer_key: process.env["TWITTER_CONSUMER_KEY"],
    consumer_secret: process.env["TWITTER_CONSUMER_SECRET"],
    access_token: process.env["TWITTER_ACCESS_TOKEN"],
    access_token_secret: process.env["TWITTER_ACCESS_TOKEN_SECRET"]
  };

  //   console.log("authData", authData);
  //   return;

  const Twitter = new twit(authData);

  console.log("posting to twitter");

  Twitter.post(
    "statuses/update",
    {
      status: bot.full_tweet()
    },
    err =>
      err ? console.log("tweet error: ", err) : console.log("tweet posted")
  );

  console.log("returning");
}

exports.botHandler = function(_event, _context, callback) {
  main();
};

for (let i = 0; i < 200; i += 1) {
  console.log(bot.full_tweet());
}
