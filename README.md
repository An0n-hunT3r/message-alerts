# Message Alerts Integration

This project enables an integration between Facebook and Slack, sending automatic messages to a designated Slack channel whenever a new message is received on Facebook.

## Setup

### 1. Create Facebook App

To integrate with Facebook, you need to create a Facebook App. Follow these steps:

- Go to the [Facebook Developers Portal](https://developers.facebook.com/).
- Create a new app and configure it with the necessary details.
- Note down the App ID, App Secret, and Page Access Token.
- Set up a Webhook to receive updates from Facebook. Define a Callback URL where Facebook will send notifications. Also, generate a Verify Token for callback URL verification.

### 2. Create Slack App

For Slack integration, you'll need to create a Slack App:

- Go to the [Slack API](https://api.slack.com/).
- Create a new Slack App and configure it.
- Note down the Slack Bot Token and specify the Slack channel where updates will be sent (e.g., `facebook-updates`).

### 3. Host the Node App

To host the Node.js app, follow these steps:

- Clone this GitHub repository to your local machine.
- Install dependencies using `npm install`.
- Set up environment variables by creating a `.env` file with the necessary credentials (e.g., Facebook App ID, App Secret, Page Access Token, Slack Bot Token, Slack Channel).
- Run the app using `npm start`.

## Permissions

Ensure the following permissions and configurations are set:

### Facebook App

- **pages_messaging:** Required to receive messages.
- **pages_read_user_content:** Required to get the sender's name from the user content.
- **pages_show_list:** Required to get the list of pages for the user.

### Slack App

- **chat:write:** Required to send messages to the specified Slack channel.
