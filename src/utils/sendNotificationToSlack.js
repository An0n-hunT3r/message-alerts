import { WebClient } from "@slack/web-api";

import { SLACK_BOT_TOKEN, SLACK_CHANNEL } from "../config/index.js";

const slackClient = new WebClient(SLACK_BOT_TOKEN);

const sendNotificationToSlack = async (message) => {
  return await slackClient.chat.postMessage({
    channel: SLACK_CHANNEL,
    text: message,
  });
};

export default sendNotificationToSlack;
