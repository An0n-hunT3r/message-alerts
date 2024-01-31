import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import {
  PORT,
  FACEBOOK_VERIFY_TOKEN,
  SLACK_SEND_MESSAGE,
} from "./config/index.js";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is message-alerts server!");
});

app.get("/webhook", (req, res) => {
  if (req.query["hub.verify_token"] === FACEBOOK_VERIFY_TOKEN) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Invalid verify token");
  }
});

app.post("/webhook", async (req, res) => {
  try {
    const entries = req.body.entry;

    entries.forEach((entry) => {
      const messagingEvents = entry.messaging;

      messagingEvents.forEach(async (event) => {
        if (event.message && event.message.text) {
          const senderId = event.sender.id;
          const messageText = event.message.text;

          // Send the message to Slack
          // await axios.post(SLACK_SEND_MESSAGE, { message: messageText });

          console.log(
            "Message sent to Slack from Facebook user:",
            senderId,
            messageText
          );
        }
      });
    });

    res.sendStatus(200);
  } catch (error) {
    console.error("Error handling Facebook webhook:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
