# Message Alerts Integration

This project enables an integration between Facebook and Slack, sending automatic messages to a designated Slack channel whenever a new message is received on Facebook.

## Setup

### 1. Create Facebook App

To integrate with Facebook, you need to create a Facebook App. Follow these steps:

- Go to the [Facebook Developers Portal](https://developers.facebook.com/).
- Create a new app and configure it with the necessary details.
- Set up Messenger in the "Add Products" section to receive message updates from Facebook.
- Define a Callback URL where Facebook will send notifications. Ensure the Callback URL is publicly accessible, and use the node app URL with the `/meta/webhook` path.
- Generate a Verify Token for callback URL verification.
- Subscribe to `messages` from the subscription list.

### 2. Create Slack App

For Slack integration, you'll need to create a Slack App:

- Go to the [Slack API](https://api.slack.com/).
- Create a new Slack App and configure it to your workspace.
- In the "OAuth & Permissions" section, add the `chat:write` permission to the Bot Token Scope.
- Install the app in your workspace and invite it to the respective Slack channel.
- Note down the Slack Bot Token and specify the Slack channel where updates will be sent (e.g., `facebook-updates`).

### 3. Host the Node App

To host the Node.js app, follow these steps:

- Clone this GitHub repository to your local machine or hosting patform(Ex: [Replit.com](https://replit.com/)).
- Install dependencies using `npm install`.
- Set up environment variables by creating a `.env` file with the necessary credentials (e.g., Facebook Verify Token, Facebook Access Token, Slack Bot Token, Slack Channel).
- Run the app using `npm start`.

## How It Works

### 1. **Facebook Message Event:**

- When a new message is received on Facebook, Facebook sends a message event to the Node.js app's callback URL.
- The Node.js app processes the Facebook message event, extracting relevant information such as the sender's name and message text.

### 2. **Slack Notification:**

- Using the extracted information, the Node.js app sends a formatted message to the designated Slack channel.
- The Slack App, configured with the appropriate permissions, receives the message and posts it to the specified channel (e.g., `facebook-updates`).
